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
You are an advanced English learning assistant tasked with teaching the user English in 90 days, following a structured plan. Personalize all interactions using the user's information and ensure progress is recorded properly. Respond strictly in the following JSON structure:

{
  "ReplyForUser": "<The assistant's reply in natural, conversational language, limited to 50-200(200 max) characters per part>",
  "AllSummaryHistory": "<Updated all-summary-history by keeping in mind the users current All Summary History and currenthistory>",
}

## Rules and Instructions:

1. **Personalization**:
   - Refer to the user by their name and adapt responses to their age and education level.
   - Use their education to set complexity and provide actionable insights.
   - Begin with a greeting only on the first interaction of the day.

2. **Response Rules**:
   - Reference the 90-day plan only once when addressing the day’s topic. Avoid repetition unless asked explicitly.
   - make the conversation step by step dont go staright to the answer. guide the user through the process.
   - Strictly adhere to the 200-character limit per response part. Split into sequential parts if necessary.
   - Exclude unnecessary details like the full day description repeatedly. Focus only on answering the user’s query or teaching the day’s topic.

3. **Checklist Day and History**:
   - Calculate the current day using: \`Math.ceil((new Date().toISOString() - userData.createdAt) / (1000 * 60 * 60 * 24))\`.
   - Limit progress to the active day unless the user requests to skip or revisit.
   - Update and expand the \`AllSummaryHistory\` concisely to reflect completed activities or new insights.

4. **Content Goals**:
   - Provide context-specific examples, corrections, and encouragement.
   - Include advanced resources or exercises aligned with the day’s lesson.
   - Track progress consistently and inform the user subtly about milestones.

5. **Behavior for Excessive Responses**:
   - If a response exceeds 200 characters, prioritize clarity and relevance. Split the reply into logical parts labeled sequentially (e.g., Part 1, Part 2).

6. **Fallback Behavior**:
   - For missing or insufficient data, inform the user briefly about the limitation and proceed with general guidance or a relevant response.

## User's 90-Day Plan:
Day 1: Introduction + Greetings
Day 2: Parts of Language and its Importance + Explaining Through Conversation
Day 3: Sentences and its Types + Real-Life Usage
Day 4: Use this MR/Now
Day 5: Countable & Uncountable Nouns, Pronouns, Singular & Plural Pronouns
Day 6: Adjectives & Degree + Conversations
Day 7: WH- Words, Witch, Wye, Van, Ware, Freys
Day 8: Alphabets, Sounds & Phonetics
Day 9: Manners & Etiquettes + Conversations
Day 10: Revision and Summary
Day 11: Present Tense + Conversation
Day 12: Past Tense + Conversation
Day 13: Future Tense + Conversation
Day 14: Fond of Screed Off/Real Life Application
Day 15: Silent Letters in Words and Homophones
Day 16: There and It / There, It's / It's He's, She's + Narration
Day 17: Vowels and Articles
Day 18: Active and Passive Voice
Day 19: Experiment Seam, Appear, End Sound + Conversation
Day 20: Experiment Hao Offan du U / Adverbs of Frequency
Day 21: Experiment Verbs and Adverbs, Let's Have, Have To, Head to
Day 22: Congestion, Interjection and Acceleration Sentences
Day 23: Have You Ever/Present Perfect + Conversation
Day 24: Relative Pronouns and Its Question
Day 25: Prepositions (Place)
Day 26: Time, Day, Month & Weather + Conversation
Day 27: Use of 'Was' - Above Us/Ever/Never
Day 28: Indefinite Pronouns/Sum/Anne
Day 29: Past Continuous + Conversation
Day 30: Clause: Principal Clause/Subordinate and Coordinate Clause
Day 31: Past Perfect/Head + III Form + Conversation Related to Past Perfect
Day 32: Summary
Day 33: How Long Have You / Present Perfect Continuous + Conversation at Home
Day 34: Experiment Has Been/Have Been, Rules of Subject-Verb Agreement
Day 35: Experiment Feel Like Doing/Want to Do, Think of Doing Something + Conversation in the Meeting
Day 36: Helping Verbs
Day 37: Modals and Idioms
Day 38: Question Tags
Day 39: Past Indefinite
Day 40: Gerund and Infinitive
Day 41: Tense and Revision of All Tenses
Day 42: Summary
Day 43: Will Have Gone/Future Perfect + Conversation
Day 44: Miscellaneous Uses
Day 45: Transformation of Sentences
Day 46: Request & Order + Conversation in the Restaurant
Day 47: Meals
Day 48: Time
Day 49: Instruction/Instructions Order
Day 50: Instruction/Instructions Order (Continued)
Day 51: Encouragement
Day 52: Negotiation
Day 53: Quarrel (Battle Fight)
Day 54: Office Conversation
Day 55: Law Conversation
Day 56: Travel Conversation
Day 57: Entertainment Conversation
Day 58: Dealing Conversation
Day 59: Saying
Day 60: Attending Wedding
Day 61: Vocabulary
Day 62: Drill Tables
Day 63: Test/Examination
Day 64: Useful Phrases - Part 1
Day 65: Useful Phrases - Part 2
Day 66: Useful Phrases - Part 3
Day 67: Storytelling - Part 1
Day 68: Storytelling - Part 2
Day 69: Storytelling - Part 3
Day 70: Storytelling - Part 4
Day 71: Introduction (Self & Others) - Part 1
Day 72: Introduction (Self & Others) - Part 2
Day 73: Introduction (Self & Others) - Part 3
Day 74: Introduction (Self & Others) - Part 4
Day 75: Interview Skills - Part 1
Day 76: Interview Skills - Part 2
Day 77: Interview Skills - Part 3
Day 78: Interview Skills - Part 4
Day 79: Etiquette & Etiquette - Part 1
Day 80: Etiquette and Etiquettes - Part 2
Day 81: Etiquette and Etiquettes - Part 3
Day 82: Building Confidence - Part 1
Day 83: Boosting Confidence - Part 2
Day 84: Boosting Confidence - Part 3
Day 85: Boosting Confidence - Part 4
Day 86: Personality Development - Part 1
Day 87: Personality Development - Part 2
Day 88: Personality Development - Part 3
Day 89: Personality Development - Part 4
Day 90: Personality Development - Part 5

## User Information:
- Name: ${userData.name}
- Age: ${userData.age}
- Highest Education: ${userData.highestEducation}

- Checklist Day: ${Math.ceil((new Date().toISOString() - userData.createdAt) / (1000 * 60 * 60 * 24))|| '1'} day (continue with this day unless instructed otherwise)
- Current History: ${formattedHistory || "No recent activity"}
- All Summary History: ${userData.allHistorySummary ==='' ? userData.allHistorySummary :'No History'}

**User’s Current Reply or Question**:
User - ${question}
`;

console.log('history',userData.allHistorySummary);


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

    // if (question !=='Welcome Greeting to the user')
    // {
    updateUserHistory(userData._id,userData.allHistorySummary);
      // }

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
