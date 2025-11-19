import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // send an object — App.jsx already supports both string & object inputs
    onSearch?.({
      term,
      location,
      minRepos: minRepos ? Number(minRepos) : "",
    });
  };

  return (
    <form
      onSubmit={submit}
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1.5fr 1fr auto",
        gap: 8,
        marginBottom: 16,
      }}
    >
      <input
        type="text"
        placeholder="Username"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location (e.g., Kigali)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="number"
        min="0"
        placeholder="Min repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
