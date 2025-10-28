import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found 😢</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />

      <Link to="/" style={{ display: "block", marginTop: "10px" }}>
        🔙 Back to Recipes
      </Link>
    </div>
  );
};

export default RecipeDetails;
