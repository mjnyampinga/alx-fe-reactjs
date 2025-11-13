// Form to add a new recipe
import React, { useState } from 'react';
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', width: '100%', padding: 8, marginBottom: 8 }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        style={{ display: 'block', width: '100%', padding: 8, marginBottom: 8 }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
