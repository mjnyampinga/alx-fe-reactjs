// Displays list of recipes
import React from 'react';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}

      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #eee', padding: 12, borderRadius: 8, marginBottom: 8 }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
