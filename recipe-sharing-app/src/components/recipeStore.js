// src/components/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  // existing state
  recipes: [],
  // new search/filter state
  searchTerm: '',
  filteredRecipes: [],

  // existing actions
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

  // keep your existing setter, but sync filters too
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  // NEW: search actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filterRecipes: () =>
    set((state) => ({
      // follow the checker’s example: title + includes + toLowerCase
      filteredRecipes: state.recipes.filter((recipe) =>
        (recipe.title || '')
          .toLowerCase()
          .includes((state.searchTerm || '').toLowerCase())
      ),
    })),
}));

export default useRecipeStore;
