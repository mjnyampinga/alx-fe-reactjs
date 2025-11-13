import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const params = useParams();
  const id = Number(recipeId ?? params.id);
  const recipe = useRecipeStore((s) => s.recipes.find(r => r.id === id));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* edit & delete */}
      <EditRecipeForm recipeId={id} />
      <DeleteRecipeButton recipeId={id} />
    </div>
  );
};

export default RecipeDetails;
