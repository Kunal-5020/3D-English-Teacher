import fetch from "node-fetch";
import dotenv from "dotenv";

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
      console.log(language);
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


  const audioEncoding = "MP3";

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

    // Return the audio as a response
    return new Response(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": `inline; filename=${voice}-voice.mp3`,
      },
    });
  } catch (error) {
    console.error("Error generating TTS audio:", error);
    return new Response(JSON.stringify({ error: "Failed to generate audio" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
