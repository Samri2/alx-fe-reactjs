// src/components/recipeStore.js
import create from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(r => r.id !== id),
    favorites: state.favorites.filter(f => f !== id)
  })),

  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
  })),

  // FAVORITES
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // RECOMMENDATIONS (simple mock example)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(r => favorites.includes(r.id) && Math.random() > 0.5);
    set({ recommendations: recommended });
  }
}));
