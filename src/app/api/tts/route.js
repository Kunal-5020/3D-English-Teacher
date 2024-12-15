import fetch from "node-fetch";

export async function GET(req) {
  // Retrieve 'teacher' and 'text' parameters from the URL query string
  const teacher = req.nextUrl.searchParams.get("teacher") || "Nanami";
  const text = req.nextUrl.searchParams.get("text") || "I'm excited to try text-to-speech";

 
  

  // Determine voice based on the selected teacher
  const language = "en-IN"; // Indian English
  const voice = teacher === "Nanami" ? "female" : "male";  // Default to 'female' for Nanami, else 'male'

  

  // Prepare Google Translate TTS URL with the selected text and voice
  const googleTTSUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
    text
  )}&tl=${language}&client=tw-ob`;

  try {
    // Fetch audio data from Google Translate TTS
    const response = await fetch(googleTTSUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch audio: ${response.statusText}`);
    }

    const audioStream = response.body;

    // Prepare the HTTP response with audio content
    return new Response(audioStream, {
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
