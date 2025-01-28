import fetch from "node-fetch";
import dotenv from "dotenv";


dotenv.config();

const API_KEY = process.env.GOOGLE_CLOUD_API_KEY;

export async function GET(req) {
  const teacher = req.nextUrl.searchParams.get("teacher") || "Nanami";
  const text = req.nextUrl.searchParams.get("text")
    .replace(/[-+]/g, ',')
    .replace(/\s+/g, ' ')
    .trim();

  let language = "English";  // Default to English
  try {
    language = req.nextUrl.searchParams.get("language") || "English";
    if (language !== "Hindi" && language !== "English") {
      throw new Error(`Invalid language: ${language}`);
    }
  } catch (error) {
    console.warn(`Error retrieving language parameter, defaulting to English. Error: ${error.message}`);
    language = "English";  // Fallback to English
  }

  let languageCode = '';
  let voice = '';

  if (language === 'Hindi') {
    languageCode = "hi-IN";
    voice = teacher === "Nanami" ? "hi-IN-Wavenet-A" : "hi-IN-Wavenet-C";
  } else if (language === 'English') {
    languageCode = "en-IN";
    voice = teacher === "Nanami" ? "en-IN-Journey-F" : "en-IN-Journey-D";
  }

  const audioEncoding = "LINEAR16";

  const ttsRequest = {
    input: { text },
    voice: { languageCode, name: voice },
    audioConfig: { audioEncoding },
  };

  try {
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

    const jsonResponse = await response.json();
    const audioContent = jsonResponse.audioContent;

    if (!audioContent) {
      throw new Error("Audio content not found in response");
    }

    const audioBuffer = Buffer.from(audioContent, 'base64');

    // Step 1: Get viseme data using Google Speech-to-Text API
    // let visemes = await extractVisemesFromAudio(audioBuffer);

    // Step 2: Process and return the result
    return new Response(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": `inline; filename=${voice}-voice.mp3`,
        // Visemes: Buffer.from(JSON.stringify(visemes)).toString("base64"),
      },
    });
  } catch (error) {
    console.error("Error generating TTS audio:", error);
    return new Response(
        JSON.stringify({
            error: "Failed to generate audio",
            message: error.message || "Unknown error",
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
        }),
        {
            status: 500,
            headers: { "Content-Type": "application/json" },
        }
    );
  }
}

// Function to extract viseme data from audio using Google Speech-to-Text
const extractVisemesFromAudio = async (audioBuffer) => {
  try {
    

    // Send the audio to Google Speech-to-Text API
    const sttRequest = {
      audio: {
        content: audioBuffer.toString('base64'), // Base64 encode the audio content
      },
      config: {
        encoding: "LINEAR16",
        sampleRateHertz: 24000, // Assuming the audio sample rate
        languageCode: 'en-US',  // Example for English, adjust as necessary
        enableWordTimeOffsets: true, // Enable word-level timestamps
        enableVisemeData: true, // Enable viseme data
        enableAutomaticPunctuation: true,
      },
    };

    const sttResponse = await fetch(`https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sttRequest),
    });

    const sttJson = await sttResponse.json();

    console.log("STT Response: ", sttJson.results[0].alternatives[0].words);

    // Step 3: Process phonemes and generate corresponding visemes
    const words = sttJson.results[0].alternatives[0].words;

    // Create a mapping of words to visemes (this can be improved with more precise lip-sync models)
    const phonemeToVisemeMap = {
      // Mouth closed or small opening
      "AA": 0, "AE": 0, "AH": 0, "AO": 0, "AW": 0, "AY": 0, "EH": 0, "ER": 0, "EY": 0, "IH": 0, "IY": 0, "OH": 0, "OW": 0, "OY": 0, "UH": 0, "UW": 0,
      
      // Mouth wide open
      "B": 1, "P": 1,
      
      // Teeth slightly apart
      "F": 2, "V": 2,
    
      // Tongue tip touching the roof
      "S": 3, "Z": 3, "SH": 3, "ZH": 3, "T": 3, "D": 3, "TH": 3, "DH": 3,
    
      // Teeth on lower lip
      "M": 4, "W": 4,
    
      // Lips slightly parted
      "L": 5, "R": 5, "Y": 5,
    
      // Slight smile
      "IY": 6, "JH": 6,
    
      // Neutral or slight mouth movement
      "G": 7, "K": 7, "N": 7,
    
      // Slight mouth opening
      "CH": 8, "NG": 8
    };

    const visemes = words.map(word => {
      const visemeID = phonemeToVisemeMap[word.word] ?? 0;  // Default to 0 if not found
      return [word.startTime.seconds * 1000, visemeID];  // Map time in milliseconds
    });

    return visemes;
  } catch (error) {
    console.error("Error extracting visemes:", error);
    throw error;
  }
};
