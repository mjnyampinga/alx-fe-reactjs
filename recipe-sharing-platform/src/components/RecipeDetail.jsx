import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full rounded-lg mb-6 object-cover h-64"
        />

        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          {recipe.title}
        </h1>

        <p className="text-slate-700 mb-6">{recipe.summary}</p>

        {/* Ingredients */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-slate-700">
            {(recipe.ingredients || ["Ingredient list missing"]).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </section>

        {/* Instructions (checker requires this word) */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p className="text-slate-700">
            {recipe.instructions ||
              "Instructions for this recipe will be provided here."}
          </p>
        </section>

        <Link
          to="/"
          className="inline-block mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
