function UserCard({ user }) {
  return (
    <a
      href={user.html_url}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        gap: 12,
        padding: 12,
        border: "1px solid #eee",
        borderRadius: 8,
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        width={48}
        height={48}
        style={{ borderRadius: "50%" }}
      />
      <div>
        <div style={{ fontWeight: 600 }}>{user.login}</div>
        <div style={{ fontSize: 12, color: "#555" }}>{user.html_url}</div>
      </div>
    </a>
  );
}

export default function UserGrid({ users, loading, error }) {
  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!users?.length) return <p>Type a username and hit Search.</p>;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}
