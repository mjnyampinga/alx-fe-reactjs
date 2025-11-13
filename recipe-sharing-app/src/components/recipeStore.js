// src/components/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  // --- existing state ---
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  // from previous step (edit/delete)
  updateRecipe: (updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updated.id ? { ...r, ...updated } : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      // keep favorites/recommendations tidy if a recipe is removed
      favorites: state.favorites.filter((rid) => rid !== id),
      recommendations: state.recommendations.filter((r) => r.id !== id),
    })),

  // from search/filter step (kept as-is so nothing breaks)
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => {
      const term = (state.searchTerm || '').toLowerCase();
      const filtered = term
        ? state.recipes.filter((r) =>
            (r.title || '').toLowerCase().includes(term)
          )
        : state.recipes;
      return { filteredRecipes: filtered };
    }),

  // --- NEW: favorites & recommendations ---
  favorites: [], // array of recipe IDs
  addFavorite: (recipeId) =>
    set((state) =>
      state.favorites.includes(recipeId)
        ? null
        : { favorites: [...state.favorites, recipeId] }
    ),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [], // array of recipe objects
  generateRecommendations: () =>
    set((state) => {
      // Simple mock: recommend up to 5 non-favorited recipes
      const fav = new Set(state.favorites);
      const recommended = state.recipes.filter((r) => !fav.has(r.id)).slice(0, 5);
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
