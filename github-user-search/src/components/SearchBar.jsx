// src/components/SearchBar.jsx
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch?.({
      term: term.trim(),
      location: location.trim(),
      minRepos: minRepos !== "" ? Number(minRepos) : undefined,
    });
  };

  const clear = () => {
    setTerm("");
    setLocation("");
    setMinRepos("");
    onSearch?.({ term: "" }); // clears results upstream
  };

  return (
    <form
      onSubmit={submit}
      className="grid gap-2 mb-4 md:grid-cols-[2fr_1.5fr_1fr_auto] md:gap-3"
    >
      <input
        type="text"
        placeholder="Username"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="GitHub username"
        autoComplete="off"
      />
      <input
        type="text"
        placeholder="Location (e.g., Kigali)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Location filter"
        autoComplete="off"
      />
      <input
        type="number"
        min="0"
        placeholder="Min repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Minimum repositories"
      />

      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
        <button
          type="button"
          onClick={clear}
          className="px-4 py-2 rounded-md border hover:bg-gray-50"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
