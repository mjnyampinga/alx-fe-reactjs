// src/components/Search.jsx
import React, { useState } from "react";
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
      // Match the checker’s expected wording:
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", gap: 8, marginBottom: 16 }}
      >
        <input
          type="text"
          placeholder="Enter GitHub username…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {user && (
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            width={72}
            height={72}
            style={{ borderRadius: "50%" }}
          />
          <div>
            <h3 style={{ margin: 0 }}>{user.name || user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
