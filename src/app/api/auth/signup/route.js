import { connectToDatabase } from "../lib/mongodb";
import User from "../models/User";
import argon2 from "argon2";

export async function POST(req) {
    try {
      const { name, email, password, age, highestEducation } = await req.json();
  
      await connectToDatabase();
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return new Response(
          JSON.stringify({ error: "Email already exists" }),
          { status: 400 }
        );
      }
  
      const hashedPassword = await argon2.hash(password, { type: argon2.argon2id });
  
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        age,
        highestEducation,
      });
  
      await newUser.save();
      return new Response(
        JSON.stringify({ message: "User created successfully" }),
        { status: 201 }
      );
    } catch (error) {
      console.error("Error during signup:", error);
      return new Response(
        JSON.stringify({ error: "Error creating user" }),
        { status: 500 }
      );
    }
  }