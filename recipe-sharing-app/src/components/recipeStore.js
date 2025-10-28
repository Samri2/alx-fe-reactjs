import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Add a new recipe
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),

  // Update search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes by title
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // You can keep your existing edit/delete logic here too
  updateRecipe: (id, updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updated } : r)),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
