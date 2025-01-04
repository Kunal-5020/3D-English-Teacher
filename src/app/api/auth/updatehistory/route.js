import { connectToDatabase } from "../lib/mongodb";
import User from "../models/User";


export async function PUT(req) {
    try {
      const { id, allHistorySummary } = await req.json();
  
      await connectToDatabase();
  
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { allHistorySummary: allHistorySummary },
        { new: true }
      );
  
      if (!updatedUser) {
        return new Response(
          JSON.stringify({ error: "User not found" }),
          { status: 404 }
        );
      }
  
      return new Response(
        JSON.stringify(updatedUser),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error updating history:", error);
      return new Response(
        JSON.stringify({ error: "Error updating history" }),
        { status: 500 }
      );
    }
  }
