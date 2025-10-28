import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipeData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-20">Recipe not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients
            ? recipe.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))
            : ["No ingredients provided"]}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p>{recipe.instructions || "No instructions provided"}</p>
      </div>
    </div>
  );
}
