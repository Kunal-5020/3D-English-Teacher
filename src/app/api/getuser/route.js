
import { getUserData } from "../auth/login/storage";  // Adjust path if necessary

export async function GET(req) {
  try {
    const user = getUserData();
    console.log('getuser',user); // Retrieve stored user data
    if (user) {
        
      return new Response(JSON.stringify(user), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // Return 404 if user data not found
      return new Response(
        JSON.stringify({ error: "User data not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    // Handle any errors during the request
    console.error("Error fetching user data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch user data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
