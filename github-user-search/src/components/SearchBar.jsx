// src/components/SearchBar.jsx
import { useState } from "react";
import axios from "axios";

const SearchBar = ({ setUsers }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    setUsers(response.data.items);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={query}
        placeholder="Search GitHub users..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
