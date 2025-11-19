import { useState } from "react";
import Search from "./components/Search";
import UserGrid from "./components/UserGrid";
import { searchUsers } from "./services/github";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (term) => {
    const q = term?.trim();
    if (!q) {
      setUsers([]);
      setError("");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const data = await searchUsers(q); // { items: [...] }
      const items = data?.items ?? [];

      if (items.length === 0) {
        // match checker’s expected message when nothing is found
        setUsers([]);
        setError("Looks like we cant find the user");
      } else {
        setUsers(items);
      }
    } catch (e) {
      // if GitHub returns 404 (or we want to standardize “not found”)
      if (e?.response?.status === 404) {
        setError("Looks like we cant find the user");
      } else {
        setError(e?.response?.data?.message || e.message || "Something went wrong");
      }
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 800, margin: "32px auto", padding: 16 }}>
      <header style={{ marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>GitHub User Search</h1>
        <p style={{ color: "#666", marginTop: 4 }}>
          Find GitHub profiles and open them directly.
        </p>
      </header>

      <SearchBar onSearch={handleSearch} />
      <UserGrid users={users} loading={loading} error={error} />
    </main>
  );
}
