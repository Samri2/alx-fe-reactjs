import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    const data = await fetchUserData(username);
    setLoading(false);

    if (data) {
      setUser(data);
    } else {
      setError("Looks like we can't find the user");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", width: "250px", marginRight: "10px" }}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h3>{user.name || user.login}</h3>
          <p>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
