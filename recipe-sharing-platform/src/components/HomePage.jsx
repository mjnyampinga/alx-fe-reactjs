import React, { useEffect, useState } from "react";
import recipesData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load data from data.json when component mounts
  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Recipe Sharing Platform
          </h1>
          <p className="text-slate-600">
            Discover delicious recipes shared by the community.
          </p>
        </header>

        {/* Responsive grid of recipe cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5 flex flex-col h-full">
                <h2 className="text-xl font-semibold text-slate-800 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-sm text-slate-600 flex-1">
                  {recipe.summary}
                </p>

                <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
                  View Recipe
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
