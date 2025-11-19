import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_GITHUB_API_BASE || "https://api.github.com",
});

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
if (token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const searchUsers = async (q) => {
  const { data } = await instance.get("/search/users", { params: { q } });
  return data; // { total_count, items: [...] }
};

export default instance;
