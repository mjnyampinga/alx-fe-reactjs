// src/components/UserGrid.jsx
import { useEffect, useState } from "react";
import { enrichUsers } from "../services/github";

export default function UserGrid({ users, loading, error, hasMore = false, onLoadMore }) {
  const [detailedUsers, setDetailedUsers] = useState([]);

  useEffect(() => {
    let cancelled = false;

    if (!users?.length) {
      setDetailedUsers([]);
      return;
    }

    // Enrich visible results with full user details
    enrichUsers(users)
      .then((data) => {
        if (!cancelled) setDetailedUsers(data);
      })
      .catch(() => {
        if (!cancelled) setDetailedUsers([]);
      });

    return () => {
      cancelled = true;
    };
  }, [users]);

  // Loading state (skeletons)
  if (loading) {
    return (
      <div className="grid gap-3 sm:gap-4 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 animate-pulse bg-white/40 border-gray-200"
          >
            <div className="w-16 h-16 rounded-full bg-gray-200" />
            <div className="h-4 w-2/3 mt-3 bg-gray-200 rounded" />
            <div className="h-3 w-1/2 mt-2 bg-gray-200 rounded" />
            <div className="h-3 w-1/3 mt-3 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (!detailedUsers.length) {
    return <p className="text-gray-600">No results</p>;
  }

  return (
    <>
      <div className="grid gap-3 sm:gap-4 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {detailedUsers.map((u) => {
          const d = u.details || {};
          return (
            <a
              key={u.id}
              href={u.html_url}
              target="_blank"
              rel="noreferrer"
              className="border rounded-xl p-4 bg-white hover:shadow-md transition-shadow border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                src={u.avatar_url}
                alt={u.login}
                className="w-16 h-16 rounded-full"
              />
              <h3 className="mt-2 mb-1 font-semibold text-gray-900">
                {d.name || u.login}
              </h3>
              <p className="text-sm text-gray-600">@{u.login}</p>

              {d.location && (
                <p className="mt-2 text-sm">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                    {d.location}
                  </span>
                </p>
              )}

              <div className="mt-3 text-sm text-gray-700 space-y-1">
                <p>Repos: <span className="font-medium">{d.public_repos ?? "—"}</span></p>
                {typeof d.followers === "number" && (
                  <p>
                    Followers: <span className="font-medium">{d.followers}</span>
                    {typeof d.following === "number" && (
                      <>
                        {" · "}Following:{" "}
                        <span className="font-medium">{d.following}</span>
                      </>
                    )}
                  </p>
                )}
              </div>
            </a>
          );
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={onLoadMore}
            className="px-4 py-2 rounded-md border bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
