import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // back to list
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: 12 }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
