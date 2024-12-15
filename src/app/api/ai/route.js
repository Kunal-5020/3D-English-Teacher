import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env["GEMINI_API_KEY"]);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let conversationHistory = []; // Store the conversation history

export async function GET(req) {
  // Get the user's question from the URL query parameter
  const question = req.nextUrl.searchParams.get("question") || "Introduce yourself and ask for the user name";

  // Define the prompt for the AI model
  const prompt = `
  You are an English language assistant designed to help users learn English. Follow these instructions:

  1. If the user speaks in Hindi:
     - Translate their sentence into English.
     - Explain the translation in Hindi, e.g., "aap is vaaky ko angrejee mein is tarah bol sakte hain - <English translation>."
     
  2. If the user speaks in English:
     - Analyze their sentence for any grammar mistakes.
     - Provide corrections and explanations for the mistakes.
     - make sure to dont send to big replies always keep it short if possible and if the the user asks a big topic then just give it in parts.

  3. Engage the user in different scenarios such as normal conversations, asking questions, or providing exercises to enhance their English learning experience.

  4. Always respond in the following JSON structure:
    {
      text: "<The assistant's reply in natural, conversational language>",
      grammar_mistakes: "<Detailed explanation of any grammar mistakes in the user's sentence>"
    }

  Here is the conversation history:
  ${conversationHistory.join("\n")}

  User's current question:
  ${question || "Introduce yourself and ask for the user's name."}
`;

  try {
    // Generate response from the AI model
    const result = await model.generateContent( prompt );

    // Add the user's question and AI's response to the conversation history
    conversationHistory.push({ user: question, assistant: result.response });

    // Return the AI's response as JSON
    return Response.json({
      result: result.response,
    });
  } catch (error) {
    console.error("Error generating content:", error);
    return Response.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
