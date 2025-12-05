import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((item) => item.id === Number(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-slate-700 text-lg">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-3xl mx-auto px-4">

        <Link
          to="/"
          className="inline-block mb-6 text-emerald-600 hover:text-emerald-700 text-sm font-medium"
        >
          ← Back to Home
        </Link>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <h1 className="text-3xl font-bold text-slate-800 mb-4">{recipe.title}</h1>
          <p className="text-slate-600 mb-6">{recipe.summary}</p>

          {/* Ingredients */}
          {recipe.ingredients && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">Ingredients</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Steps */}
          {recipe.steps && (
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">Cooking Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
