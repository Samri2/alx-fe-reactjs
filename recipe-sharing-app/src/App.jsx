import React from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

const App = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App 🍳</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
