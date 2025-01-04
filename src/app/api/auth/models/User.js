import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number },
    highestEducation: { type: String },
    checklist: { type: String, default: "" },
    allHistorySummary: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
