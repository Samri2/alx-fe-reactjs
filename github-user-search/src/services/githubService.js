import axios from "axios";

// fetchUserData takes a username and returns user data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null; // return null if not found
  }
};
