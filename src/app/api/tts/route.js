import fetch from "node-fetch";
import dotenv from "dotenv";
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { exec } from 'child_process';
import { promisify } from 'util';

dotenv.config();

const API_KEY = process.env.GOOGLE_CLOUD_API_KEY;  // API Key stored in environment variable

export async function GET(req) {
  // Retrieve 'teacher' and 'text' parameters from the URL query string
  const teacher = req.nextUrl.searchParams.get("teacher") || "Nanami";
  const text = req.nextUrl.searchParams.get("text")
    .replace(/[-+]/g, ',')  // Only replace minus and plus symbols
    .replace(/\s+/g, ' ')    // Replace multiple spaces with a single space
    .trim();  // Remove leading/trailing spaces
  
  // Initialize language and handle potential errors when retrieving it
  let language = "English";  // Default to English

  try {
    language = req.nextUrl.searchParams.get("language") || "English";  // Attempt to retrieve the language
    // If invalid language, default to English
    if (language !== "Hindi" && language !== "English") {
      throw new Error(`Invalid language: ${language}`);
    }
  } catch (error) {
    console.warn(`Error retrieving language parameter, defaulting to English. Error: ${error.message}`);
    language = "English";  // Fallback to English if an error occurs
  }

  // Initialize languageCode and voice variables
  let languageCode = '';
  let voice = '';

  // Set language-specific configurations
  if (language === 'Hindi') {
    languageCode = "hi-IN";  // Hindi
    voice = teacher === "Nanami" ? "hi-IN-Wavenet-A" : "hi-IN-Wavenet-C";
  } 
  else if (language === 'English') {
    languageCode = "en-IN";  // Indian English
    voice = teacher === "Nanami" ? "en-IN-Journey-F" : "en-IN-Journey-D";
  }

  const audioEncoding = "LINEAR16";  //wav format (dont go with mp3 as it does not work with rhubarb)

  const ttsRequest = {
    input: { text },
    voice: { languageCode, name: voice },
    audioConfig: { audioEncoding },
  };

  try {
    // Make the request to the Google Text-to-Speech API with the API key in the URL
    const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ttsRequest),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch audio: ${response.statusText}`);
    }

    // Extract the JSON body from the response which contains the audio data
    const jsonResponse = await response.json();
    const audioContent = jsonResponse.audioContent;

    if (!audioContent) {
      throw new Error("Audio content not found in response");
    }

    // Decode base64 audio content and prepare it as a buffer
    const audioBuffer = Buffer.from(audioContent, 'base64');

    // let visemes;
    // try{
    //   visemes = await lipsyncData(audioBuffer);
    // } catch (error) {
    //   console.error('Error in lipsyncData:', error);
    // }

    // Return the audio as a response
    return new Response(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": `inline; filename=${voice}-voice.mp3`,
        // Visemes: Buffer.from(JSON.stringify(visemes)).toString("base64"),
      },
    });
  } catch (error) {
    console.error("Error generating TTS audio:", error);  // Log the error on the server

    // Send a detailed error response to the client
    return new Response(
        JSON.stringify({
            error: "Failed to generate audio",
            message: error.message || "Unknown error", // Include the error message
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined, // Only include stack trace in development
        }),
        {
            status: 500,
            headers: { "Content-Type": "application/json" },
        }
    );
}
}

// Main function to handle lipsync data processing
const lipsyncData = async (audioBuffer) => {
  try {
    // Use the `audioBuffer` directly, assuming we have an external method to process it
    const currentData = await processAudioBuffer(audioBuffer, '1');

    // Mapping values to IDs based on the description
    const visemeMap = {
      "A": 1,
      "B": 21,
      "C": 5,
      "D": 8,
      "E": 19,
      "F": 18,
      "G": 7,
      "H": 6,
      "X": 0,
    };

    // Function to transform viseme data using the provided map
    const transformVisemeData = (data, map) => {
      return data.map(item => {
        // Convert duration to milliseconds
        const audioOffset = Math.round((item.end) * 1000);

        // Map the `value` field to the corresponding ID
        const visemeID = map[item.value] ?? -1; // Default to -1 if not found

        return [audioOffset, visemeID]; // Output in the format [ID, offset]
      });
    };

    // Execute the transformation on the `currentData` (the viseme data you got from the buffer)
    const visemes = transformVisemeData(currentData.mouthCues, visemeMap);
    return visemes;
  } catch (error) {
    console.error('Error processing lipsync data:', error);
  }
};

const execPromise = promisify(exec);

// Function to process the audio buffer and extract phonetic data using rhubarb
export const processAudioBuffer = async (buffer, message) => {
  const tempFilePath = path.join(os.tmpdir(), `temp_${message}.wav`);
  const outputJsonPath = path.join(os.tmpdir(), `message_${message}.json`);

  try {
    // Write the buffer to the temporary file
    await fs.writeFile(tempFilePath, buffer);

    // Run rhubarb on the temporary WAV file
    const rhubarbCommand = `rhubarb -f json -o "${outputJsonPath}" "${tempFilePath}" -r phonetic`;

    await execPromise(rhubarbCommand);

    // Optionally, delete the temporary file after processing
    await fs.unlink(tempFilePath);

    // Read and return the processed JSON data
    const data = await fs.readFile(outputJsonPath, 'utf8');

    // Optionally, delete the output JSON file after reading
    await fs.unlink(outputJsonPath);

    return JSON.parse(data);
  } catch (err) {
    console.error('Error in processAudioBuffer:', err);
    throw err;
  }
};

