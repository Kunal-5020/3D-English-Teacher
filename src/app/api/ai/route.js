import { GoogleGenerativeAI } from "@google/generative-ai";
import { serialize, parse } from "cookie";

const genAI = new GoogleGenerativeAI(process.env["GEMINI_API_KEY"]);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function GET(req) {
  // Retrieve conversation history from the cookie
  const cookies = parse(req.headers.get("cookie") || "");
  let conversationHistory = cookies.conversationHistory ? JSON.parse(cookies.conversationHistory) : [];
  
  const question = req.nextUrl.searchParams.get("question") || "Introduce yourself and ask for the user name";
  let languageMode = "English";

  if (question.includes("HindiModeActivate")) {
    languageMode = "Hindi";
  } else if (question.includes("HindiModeDeactivate") || question.includes("EnglishModeActivate")) {
    languageMode = "English";
  }

  const formattedHistory = conversationHistory.length
    ? conversationHistory.map(({ user, assistant }) => `User: ${user}\nAssistant: ${assistant}`).join("\n")
    : "No previous conversation.";

    const prompt = `
    You are an advanced English learning assistant designed to help users improve their English skills. Follow these rules based on the language mode:
    
    **Language Mode: ${languageMode}**
  
    1.Always respond in the following JSON structure:
    {
      "text": "<The assistant's reply in natural, conversational language>",
      "grammar_mistakes": "<Detailed explanation of any grammar mistakes in the user's sentence (only if there are mistakes)>"
    }
    
    2. **If the user speaks in Hindi (Hindi Mode)**:
       - Respond in Hindi unless the user asks otherwise.
       - Use simple, clear Hindi ensuring it’s easy to understand.
       - if the user response in english then still send your response in Hindi.
    
    3. **If the user speaks in English (English Mode)**:
       - Analyze the user’s sentence for grammar, spelling, or phrasing issues.
       - Provide corrections with concise explanations (100-150 characters). If the explanation is longer, divide it into parts and confirm before continuing (e.g., "Would you like me to continue?").
       - If there are no mistakes then just give the grammerMistake as null.
       -if the user replys in hindi then translate the user’s sentence into English, providing a brief explanation in Hindi, e.g., "Aap is vaaky ko angrezee mein is tarah bol sakte hain".
    
    4. **General Rules for Both Modes**:
       - Always keep responses concise, interactive, and engaging.
       - If the user’s query relates to a large topic, divide your explanation into smaller, digestible parts and seek confirmation after each.
       - Verify that your responses are accurate, clear, and grammatically correct, with no repeated or irrelevant information.
       - For scenario-based exercises or tasks (e.g., role-playing conversations), guide the user step by step.
       - And always verify the response before sending it to the user, that does the reply matches the desired results user wants.
       - Make sure the response is proper and make sense and doesnt contain any grammatical errors or repeated words, simply put the response should be clear and concise.
  
    
    5. **Language Mode Switching**:
       - If the user sends "HindiModeActivate," switch to Hindi for all responses until "HindiModeDeactivate" or "EnglishModeActivate" is received.
       - Acknowledge the mode change in your first response after activation.
  
    
    
    **Conversation History**:
    ${formattedHistory}
    
    **User’s Current Reply or question**:
    User - ${question}
    `;


  try {
    const result = await model.generateContent(prompt);
    let example;

    try {
      example = JSON.parse(
        result.response.candidates[0].content.parts[0].text.replace(/```json|```/g, "").trim()
      );
    } catch (parseError) {
      throw new Error("Failed to parse AI response JSON");
    }

    // Update the conversation history
    conversationHistory.push({ user: question, assistant: example.text });

    

    // Set the updated conversation history in the cookies
    const cookieValue = serialize("conversationHistory", JSON.stringify(conversationHistory), { path: "/" });
    return new Response(JSON.stringify({ result: example }), {
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': cookieValue
      }
    });
    
  } catch (error) {
    console.error("Error generating content:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate response" }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
