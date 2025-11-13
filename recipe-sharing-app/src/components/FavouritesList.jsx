import React from 'react';
import useRecipeStore from './recipeStore';

const FavouritesList = () => {
  const favouritesIds = useRecipeStore((s) => s.favorites);   // IDs
  const recipes = useRecipeStore((s) => s.recipes);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  const favouriteRecipes = favouritesIds
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>My Favourites</h2>
      {favouriteRecipes.length === 0 && <p>No favourites yet.</p>}
      {favouriteRecipes.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <p>{r.description}</p>
          <button onClick={() => removeFavorite(r.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavouritesList;
