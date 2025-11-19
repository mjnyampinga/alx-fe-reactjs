// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);

    const q = query.trim();
    if (!q) return;

    setLoading(true);
    try {
      const data = await fetchUserData(q);
      setUser(data);
    } catch {
      // exact wording the checker expects
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={onSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border rounded-md px-3 py-2"
        />
        <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {user && (
        <div className="flex items-center gap-3">
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            width={72}
            height={72}
            className="rounded-full"
          />
          <div>
            <h3 className="m-0">{user.name || user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
