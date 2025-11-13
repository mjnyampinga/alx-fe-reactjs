import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');

  if (!recipe) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    updateRecipe(recipeId, { title: title.trim(), description: description.trim() });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
      <h3>Edit Recipe</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
