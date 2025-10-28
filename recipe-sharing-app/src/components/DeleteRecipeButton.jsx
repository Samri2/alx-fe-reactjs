// src/components/DeleteRecipeButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // redirect after deleting
  };

  return (
    <button 
      onClick={handleDelete} 
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
