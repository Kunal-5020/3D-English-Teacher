import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://database_creators:GjSWaV7mJnOy5hJw@cluster0.lwyhn.mongodb.net/userdata";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
