import { useEffect, useState } from "react";
import { enrichUsers } from "../services/github";

export default function UserGrid({ users, loading, error }) {
  const [detailedUsers, setDetailedUsers] = useState([]);

  useEffect(() => {
    let cancelled = false;

    if (!users?.length) {
      setDetailedUsers([]);
      return;
    }

    // Enrich visible results with full user details
    enrichUsers(users).then((data) => {
      if (!cancelled) setDetailedUsers(data);
    });

    return () => {
      cancelled = true;
    };
  }, [users]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!detailedUsers.length) return <p>No results</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 12,
      }}
    >
      {detailedUsers.map((u) => {
        const d = u.details || {};
        return (
          <a
            key={u.id}
            href={u.html_url}
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid #eee",
              padding: 12,
              borderRadius: 8,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={u.avatar_url}
              alt={u.login}
              style={{ width: 64, height: 64, borderRadius: "50%" }}
            />
            <h3 style={{ margin: "8px 0 4px" }}>{d.name || u.login}</h3>
            <p style={{ margin: 0, color: "#555" }}>@{u.login}</p>
            {d.location && (
              <p style={{ margin: "6px 0 0", fontSize: 14 }}>{d.location}</p>
            )}
            <p style={{ margin: "6px 0 0", fontSize: 14 }}>
              Repos: {d.public_repos ?? "—"}
            </p>
          </a>
        );
      })}
    </div>
  );
}
