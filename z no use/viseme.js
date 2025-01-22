import ffmpeg from "fluent-ffmpeg";
import * as wav from "node-wav";
import fs from "fs/promises";
import { SpeechClient } from "@google-cloud/speech";
import path from "path";

// Initialize Google Cloud Speech client
const speechClient = new SpeechClient();

// Phoneme-to-viseme mapping (Azure-like IDs)
const PHONEME_TO_VISEME = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
  b: 6,
  p: 6,
  m: 6,
  t: 7,
  d: 7,
  n: 7,
  f: 8,
  v: 8,
  s: 9,
  z: 9,
  sh: 10,
  zh: 10,
  ch: 11,
  j: 11,
  w: 12,
  y: 13,
  k: 14,
  g: 14,
  ng: 14,
  l: 15,
  r: 16,
  h: 17,
  th: 18,
  dh: 18,
  silence: 0,
};

// Function to map phonemes to viseme data in [audioOffset, visemeId] format
function mapPhonemesToVisemeData(phonemes) {
  return phonemes.map(({ phoneme, timestamp }) => [
    Math.round(timestamp * 1000), // Convert seconds to milliseconds
    PHONEME_TO_VISEME[phoneme] || 0, // Default to neutral (0) if phoneme not found
  ]);
}

// Function to convert MP3 buffer to WAV file
async function convertMp3ToWav(mp3Buffer) {
  const tempMp3Path = path.join(__dirname, "temp.mp3");
  const tempWavPath = path.join(__dirname, "temp.wav");

  // Write the MP3 buffer to a temporary MP3 file
  await fs.writeFile(tempMp3Path, mp3Buffer);

  return new Promise((resolve, reject) => {
    // Use ffmpeg to convert the MP3 file to WAV
    ffmpeg(tempMp3Path)
      .toFormat("wav")
      .on("end", () => resolve(tempWavPath)) // Return path of converted WAV
      .on("error", reject)
      .save(tempWavPath);
  });
}

// Function to extract phonemes using Google Cloud Speech-to-Text
async function extractPhonemesFromAudio(audioBuffer) {
  const audio = {
    content: audioBuffer.toString("base64"),
  };

  const config = {
    encoding: "LINEAR16", // WAV format
    sampleRateHertz: 16000, // Adjust according to your WAV sample rate
    languageCode: "en-US",
    phonemeVisibility: "FULL", // To extract phonemes
  };

  const request = {
    audio: audio,
    config: config,
  };

  const [response] = await speechClient.recognize(request);

  // Extract phonemes from the response (note: actual phoneme data might need further processing)
  return response.results.flatMap(result =>
    result.alternatives.flatMap(alternative =>
      alternative.words.map(word => ({
        phoneme: word.phones ? word.phones[0] : "silence",
        timestamp: word.startTime.seconds + word.startTime.nanos / 1e9,
      }))
    )
  );
}

// Main function to process audio and get viseme data from MP3 buffer
export async function processAudioForVisemes(mp3Buffer) {
  try {
    // Convert MP3 buffer to WAV file path
    const wavPath = await convertMp3ToWav(mp3Buffer);

    // Read the WAV file buffer
    const wavBuffer = await fs.readFile(wavPath);

    // Decode the WAV buffer (for validation)
    const decodedAudio = wav.decode(wavBuffer);

    // Extract phonemes using Google Cloud Speech API
    const phonemes = await extractPhonemesFromAudio(decodedAudio);

    // Map phonemes to viseme data
    const visemeData = mapPhonemesToVisemeData(phonemes);

    // Clean up temporary files
    await fs.unlink(wavPath); // Delete the temporary WAV file
    await fs.unlink(tempMp3Path); // Delete the temporary MP3 file

    return visemeData;
  } catch (error) {
    console.error("Error processing audio:", error);
    throw error;
  }
}


export default processAudioForVisemes;
