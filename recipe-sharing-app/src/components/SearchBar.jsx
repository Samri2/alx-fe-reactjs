import React from "react";
import { useRecipeStore } from "../store/recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
      className="border border-gray-300 rounded px-3 py-2 w-full"
    />
  );
};

export default SearchBar;
