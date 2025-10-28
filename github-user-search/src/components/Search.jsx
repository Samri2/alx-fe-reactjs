import { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
// inside the return:

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // fetchUserData now handles advanced search
  const fetchUserData = async () => {
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      // Construct query
      let query = username ? `${username} in:login` : "";
      if (location) query += ` location:${location}`;
      if (minRepos) query += ` repos:>=${minRepos}`;

      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      if (response.data.items.length === 0) {
        setError(true);
      } else {
        setUsers(response.data.items);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>
      {results.length > 0 && <SearchResults users={results} />}


      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      {users.length > 0 && (
        <div className="mt-4 space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center space-x-4 border p-2 rounded">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold">{user.login}</p>
                <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
