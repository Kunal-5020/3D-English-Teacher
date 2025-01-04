import { connectToDatabase } from "../lib/mongodb";
import User from "../models/User";

/**
 * Updates the user's history summary.
 * @param {string} id - The ID of the user.
 * @param {string} allHistorySummary - The updated history summary.
 * @returns {Object} The updated user object or an error.
 */
export async function updateUserHistory(id, allHistorySummary) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { allHistorySummary },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("User not found");
    }

    return { success: true, user: updatedUser };
  } catch (error) {
    console.error("Error updating user history:", error);
    return { success: false, error: error.message };
  }
}
