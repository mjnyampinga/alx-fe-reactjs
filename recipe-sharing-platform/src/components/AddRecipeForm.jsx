import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validationErrors = {};

    if (!title.trim()) validationErrors.title = "Title is required.";

    if (!ingredients.trim()) {
      validationErrors.ingredients = "Ingredients are required.";
    } else {
      const list = ingredients.split(",").map((i) => i.trim());
      if (list.length < 2) {
        validationErrors.ingredients =
          "Ingredients list must include at least two items.";
      }
    }

    if (!steps.trim()) validationErrors.steps = "Steps are required.";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(","),
      steps,
    };

    console.log("Submitted recipe:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 text-center">
          Add New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div className="md:flex md:flex-col">
            <label className="block text-sm font-medium text-slate-700 mb-1 md:text-base">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div className="md:flex md:flex-col">
            <label className="block text-sm font-medium text-slate-700 mb-1 md:text-base">
              Ingredients (comma-separated)
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div className="md:flex md:flex-col">
            <label className="block text-sm font-medium text-slate-700 mb-1 md:text-base">
              Preparation Steps
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition md:text-lg md:py-4"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
