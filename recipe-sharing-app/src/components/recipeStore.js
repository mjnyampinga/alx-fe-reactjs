// src/components/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  // --- existing state ---
  recipes: [],

  // search/filter state (from previous step)
  searchTerm: '',
  filteredRecipes: [],

  // --- NEW: favorites & recommendations state ---
  // store favorite recipe IDs
  favorites: [],
  // store recommended recipe objects
  recommendations: [],

  // --- existing actions ---
  addRecipe: (newRecipe) => {
    set((state) => ({ recipes: [...state.recipes, newRecipe] }));
    get().filterRecipes();
  },

  deleteRecipe: (id) => {
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) }));
    get().filterRecipes();
  },

  updateRecipe: (id, updates) => {
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    }));
    get().filterRecipes();
  },

  getRecipeById: (id) => get().recipes.find((r) => r.id === id),

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  // --- search actions (unchanged) ---
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () =>
    set((state) => ({
      // title + includes + toLowerCase (to match checker)
      filteredRecipes: state.recipes.filter((recipe) =>
        (recipe.title || '')
          .toLowerCase()
          .includes((state.searchTerm || '').toLowerCase())
      ),
    })),

  // --- NEW: favorites actions ---
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // --- NEW: simple recommendations generator (per brief example) ---
  generateRecommendations: () =>
    set((state) => {
      // mock: recommend items that are also favorites sometimes
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
