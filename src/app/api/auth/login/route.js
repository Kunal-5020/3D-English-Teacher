import { connectToDatabase } from "../lib/mongodb"; // Adjust the path based on your project structure
import User from "../models/User";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { saveUserData } from "./storage";

const JWT_SECRET = "1234567890";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials" }),
        { status: 401 }
      );
    }

    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials" }),
        { status: 401 }
      );
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });
    saveUserData(user);
    return new Response(
      JSON.stringify({ message: "Login successful", token}),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(
      JSON.stringify({ error: "Error logging in" }),
      { status: 500 }
    );
  }
}
