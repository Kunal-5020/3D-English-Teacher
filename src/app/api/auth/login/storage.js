import fs from 'fs';
import path from 'path';

const isVercel = process.env.VERCEL === '1'; 
let filePath;
// Path to save user data
if (isVercel) {
    filePath = path.join('/tmp', 'userData.json');}
  else{
    filePath = path.join(process.cwd(), 'src','app','storage', 'userData.json');
  }

 
/**
 * Save user data to a file.
 * @param {object} data - User data to store.
 */
export function saveUserData(data) {
  // Convert data to a JSON string and write to the file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
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


export function clearUserData() {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath); // Delete the file
  }
}