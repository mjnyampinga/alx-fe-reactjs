// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, filterRecipes } = useRecipeStore((state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes ?? [],
    searchTerm: state.searchTerm ?? '',
    filterRecipes: state.filterRecipes ?? (() => {}),
  }));

  // Recompute filtered list whenever the search term changes
  useEffect(() => {
    if (typeof filterRecipes === 'function') filterRecipes();
  }, [searchTerm, filterRecipes]);

  const list = searchTerm?.trim() ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {(!list || list.length === 0) && <p>No recipes yet. Add one!</p>}
      {list?.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
