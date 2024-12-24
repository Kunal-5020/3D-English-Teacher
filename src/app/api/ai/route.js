import { GoogleGenerativeAI } from "@google/generative-ai";
import { serialize, parse } from "cookie";

const genAI = new GoogleGenerativeAI(process.env["GEMINI_API_KEY"]);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function GET(req) {
  // Retrieve cookies
  const cookies = parse(req.headers.get("cookie") || "");
  let conversationHistory = cookies.conversationHistory
    ? JSON.parse(cookies.conversationHistory)
    : [];
  let languageMode = cookies.languageMode || "English"; // Default to English mode

  const question =
    req.nextUrl.searchParams.get("question") ||
    "Introduce yourself and ask for the user name";

  // Check for language mode switches
  if (question.includes("HindiModeActivate")) {
    languageMode = "Hindi";
  } else if (
    question.includes("HindiModeDeactivate") ||
    question.includes("EnglishModeActivate")
  ) {
    languageMode = "English";
  }

  const formattedHistory = conversationHistory.length
    ? conversationHistory
        .map(
          ({ user, assistant }) => `User: ${user}\nAssistant: ${assistant}`
        )
        .join("\n")
    : "No previous conversation.";

  const prompt = `
You are an advanced ${languageMode} learning assistant designed to help users improve their English skills. Follow these rules:

1. Always respond in the following JSON structure:
{
  "text": "<The assistant's reply in natural, conversational language, limited to 150 characters>",
  "grammar_mistakes": "<Detailed explanation of any grammar mistakes in the user's sentence, or null if there are no mistakes>"
}

2. If the user speaks in another language:
   - Translate your reply into ${languageMode}.
   - Respond in this format: "You can speak this in ${languageMode} as <${languageMode} translation>".
   - Maintain the same language as the user’s reply for this response.

3. If the user speaks in ${languageMode}:
   - Analyze the user’s sentence for grammar, spelling, or phrasing issues.
   - Provide corrections with concise explanations. If the explanation is lengthy, divide it into parts and ask for confirmation before continuing (e.g., "Would you like me to continue?").
   - If there are no grammar mistakes, set "grammar_mistakes" to null.

4. General rules:
   - Ensure responses are concise, interactive, and engaging.
   - For large topics, break explanations into smaller, digestible parts and confirm with the user before continuing.
   - Verify that responses are accurate, clear, and grammatically correct without any repetition or irrelevant information.
   - For scenario-based tasks, such as role-playing conversations, guide the user step by step.
   - Always double-check responses to ensure they meet the user's needs, are relevant, and make sense in the context of English learning.
   - Avoid discussing topics unrelated to teaching English.
   - Responses must be clear, concise, and strictly within the scope of English learning.

**Conversation History**:
${formattedHistory}

**User’s Current Reply or Question**:
User - ${question}
`;

  try {
    const result = await model.generateContent(prompt);
    let example;

    try {
      example = JSON.parse(
        result.response.candidates[0].content.parts[0].text
          .replace(/```json|```/g, "")
          .trim()
      );
    } catch (parseError) {
      throw new Error("Failed to parse AI response JSON");
    }

    // Update the conversation history
    conversationHistory.push({ user: question, assistant: example.text });

    // Set updated cookies for conversation history and language mode
    const updatedCookies = [
      serialize("conversationHistory", JSON.stringify(conversationHistory), {
        path: "/",
      }),
      serialize("languageMode", languageMode, { path: "/" }),
    ].join("; ");

    return new Response(JSON.stringify({ result: example }), {
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": updatedCookies,
      },
    });
  } catch (error) {
    console.error("Error generating content:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate response" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
