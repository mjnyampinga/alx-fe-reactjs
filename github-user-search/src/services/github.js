import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

// Backward compatible: accepts a string (basic) OR an object (advanced).
export async function searchUsers(termOrParams, page = 1, perPage = 12) {
  const params =
    typeof termOrParams === "string"
      ? { term: termOrParams }
      : (termOrParams || {});

  const { term = "", location = "", minRepos = "" } = params;

  const qualifiers = [];
  if (location) qualifiers.push(`location:${location}`);
  if (minRepos !== "" && !Number.isNaN(Number(minRepos)))
    qualifiers.push(`repos:>=${minRepos}`);

  const q = [term, ...qualifiers].filter(Boolean).join(" ");

  const { data } = await api.get("/search/users", {
    params: { q, page, per_page: perPage },
  });

  return data; // { total_count, items: [...] }
}

// Fetch full profile for a single login (location, public_repos, etc.)
export async function getUser(login) {
  const { data } = await api.get(`/users/${login}`);
  return data;
}

// Convenience helper: enrich a list of search items with full details.
export async function enrichUsers(items = []) {
  const detailed = await Promise.all(
    items.map(async (u) => {
      try {
        const d = await getUser(u.login);
        return { ...u, details: d };
      } catch {
        return u;
      }
    })
  );
  return detailed;
}
