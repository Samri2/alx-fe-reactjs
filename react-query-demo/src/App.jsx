// src/App.jsx
import React from "react";
import PostsComponent from "./components/PostsComponent";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React Query Demo</h1>
      <PostsComponent />
    </div>
  );
}

export default App;
