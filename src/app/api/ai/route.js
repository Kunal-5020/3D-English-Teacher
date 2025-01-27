import { GoogleGenerativeAI } from "@google/generative-ai";
import { serialize, parse } from "cookie";
import { updateUserHistory } from "../auth/updatehistory/route.js";
import { saveUserData,getUserData } from "../auth/login/storage.js";

const genAI = new GoogleGenerativeAI(process.env["GEMINI_API_KEY"]);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function GET(req) {
  // Retrieve cookies

  const cookies = parse(req.headers.get("cookie") || "");
  let conversationHistory = cookies.conversationHistory
    ? JSON.parse(cookies.conversationHistory)
    : [];

  const question =
    req.nextUrl.searchParams.get("question") ||
    "Start the conversation";

 const userData = getUserData();

  const formattedHistory = conversationHistory.length
    ? conversationHistory
        .map(
          ({ user, assistant }) => `User: ${user}\nAssistant: ${assistant}`
        )
        .join("\n")
    : "No previous conversation.";


  const prompt = `
You are an advanced English learning assistant tasked with helping users clarify doubts after they have completed their online lessons. Your goal is to ensure they understand the concepts fully, offering clear, concise, and helpful answers. Respond in a natural and conversational tone, while being specific to the student's needs. Use the following structure for your responses(always keep the structure in mind while generating the response):

{
  "ReplyForUser": "<The assistant's reply in natural, conversational language, limited to 50-200(200 max) characters per part>",
  "AllSummaryHistory": "<Updated all-summary-history by keeping in mind the users current All Summary History and currenthistory>",
}
  
-Make sure the student feels supported and confident as they continue their learning journey.
-Use the user's name and other information to personalize the conversation.
-Use simple language and avoid jargon to ensure the user understands the response.
-Remember to keep the conversation focused on the user's needs and goals.
-Be patient and encouraging, providing clear explanations and examples when needed.
-Use positive reinforcement to motivate the user and build their confidence.
-Encourage the user to ask questions and seek help when needed.
-End the conversation on a positive note, encouraging the user to continue learning.
-Be empathetic and understanding, acknowledging the user's efforts and progress.
-Use active listening to ensure you understand the user's questions and concerns.
-Be respectful and professional in your interactions with the user.
-Remember to keep the conversation engaging and interactive to maintain the user's interest.
-Use humor and creativity to make the conversation enjoyable and memorable.
-Encourage the user to practice and apply what they have learned in real-life situations.
-Use examples and scenarios to illustrate key concepts and reinforce learning.
-Be flexible and adaptable in your responses to meet the user's unique needs and preferences.
-Use positive language and tone to motivate and inspire the user to achieve their goals.
-make that you dont repeat the same thing again and again
-also make sure that you dont give user greetings again and again only once in the starting of the conversation(check the current history for that)

## User Information:
- Name: ${userData.name}
- Age: ${userData.age}
- Highest Education: ${userData.highestEducation}

- Current History: ${formattedHistory || "No recent activity"}
- All Summary History: ${userData.allHistorySummary ==='' ? userData.allHistorySummary :'No History'}

**User’s Current Reply or Question**:
User - ${question}
`;

// console.log('history ->',userData.allHistorySummary);
// console.log('checklist day ->',Math.ceil((new Date() - new Date(userData.createdAt)) / (1000 * 60 * 60 * 24))+1);

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
    conversationHistory.push({ user: question, assistant: example.ReplyForUser });

    // Set updated cookies for conversation history and language mode
    const updatedCookies = [
      serialize("conversationHistory", JSON.stringify(conversationHistory), {
        path: "/",
      }),
    ].join("; ");
    
    userData.checklist = example.ChecklistDay;
    userData.allHistorySummary = example.AllSummaryHistory;

    updateUserHistory(userData._id,userData.allHistorySummary);
    
    saveUserData(userData);

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
