// src/components/RecommendationsList.jsx
import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes 🌟</h2>
      {recommendations.length === 0 && <p>No recommendations yet.</p>}
      {recommendations.map(recipe => (
        <div key={recipe.id} style={{ border: "1px solid green", margin: "10px", padding: "5px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
