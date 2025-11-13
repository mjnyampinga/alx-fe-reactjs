// src/components/SearchBar.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: 12, padding: 8, width: '100%' }}
    />
  );
};

export default SearchBar;
