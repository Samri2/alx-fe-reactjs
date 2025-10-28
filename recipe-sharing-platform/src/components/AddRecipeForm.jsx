import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients || ingredients.split(",").length < 2)
      newErrors.ingredients = "Provide at least 2 ingredients, separated by commas";
    if (!instructions) newErrors.instructions = "Instructions are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Pass data to parent component
    onAddRecipe({
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions,
      image: "https://via.placeholder.com/150",
      summary: instructions.substring(0, 50) + "...",
    });

    // Clear form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Ingredients (comma-separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Preparation Steps</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        />
        {errors.instructions && (
          <p className="text-red-500 text-sm">{errors.instructions}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add Recipe
      </button>
    </form>
  );
}
