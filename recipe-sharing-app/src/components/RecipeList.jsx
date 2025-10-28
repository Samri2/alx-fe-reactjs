import React, { useEffect } from "react";
import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const { filteredRecipes, recipes, searchTerm, filterRecipes } = useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, recipes, filterRecipes]);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div className="grid gap-4 mt-4">
      {displayRecipes.length > 0 ? (
        displayRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
            <p>{recipe.description}</p>
            <Link
              to={`/recipes/${recipe.id}`}
              className="text-blue-500 underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No recipes found...</p>
      )}
    </div>
  );
};

export default RecipeList;
