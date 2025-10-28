import { useState } from "react";
import AddRecipeForm from "./AddRecipeForm";
import recipeData from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState(recipeData);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AddRecipeForm onAddRecipe={handleAddRecipe} />

      <h2 className="text-2xl font-bold mt-8 mb-4">All Recipes</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
