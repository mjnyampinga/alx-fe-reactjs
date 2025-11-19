// src/services/githubService.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: { Accept: "application/vnd.github+json" },
});

// If you add a token to .env, we’ll use it.
api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/**
 * Fetch a single GitHub user by username
 * @param {string} username
 * @returns {Promise<object>}
 */
export async function fetchUserData(username) {
  if (!username) throw new Error("missing username");
  const res = await api.get(`/users/${encodeURIComponent(username)}`);
  return res.data;
}

export default { fetchUserData };
