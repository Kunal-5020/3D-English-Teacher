import { saveUserData } from "./storage.js";

export async function POST(req) {
  try {
    const { user } = await req.json();
    saveUserData(user);

   

    return new Response(JSON.stringify({ message: "User data saved successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error saving user data:", error);
    return new Response(JSON.stringify({ error: "Failed to save user data." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
