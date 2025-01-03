import fs from 'fs';
import path from 'path';

// Path to save user data
const filePath = path.join(process.cwd(), 'src','app','storage', 'userData.json');

/**
 * Save user data to a file.
 * @param {object} data - User data to store.
 */
export function saveUserData(data) {
  // Convert data to a JSON string and write to the file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('saved');
}

/**
 * Retrieve the stored user data from file.
 * @returns {object|null} - The stored user data or null if not set.
 */
export function getUserData() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
  return null;
}

/**
 * Clear user data from file (optional).
 */
export function clearUserData() {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath); // Delete the file
  }
}

/**
 * Update the checklist of the user.
 * @param {string} newChecklist - The updated checklist string.
 */
export function updateChecklist(newChecklist) {
  userData.checklist = newChecklist;
  userData.updatedAt = new Date().toISOString(); // Update the timestamp
}

/**
 * Update the allHistorySummary of the user.
 * @param {string} newSummary - The updated history summary string.
 */
export function updateAllHistorySummary(newSummary) {
  userData.allHistorySummary = newSummary;
  userData.updatedAt = new Date().toISOString(); // Update the timestamp
}
