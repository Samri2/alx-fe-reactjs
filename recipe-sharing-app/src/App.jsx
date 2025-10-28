import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>🍲 Recipe Sharing App</h1>
        <nav style={{ marginBottom: "15px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/add">Add Recipe</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
