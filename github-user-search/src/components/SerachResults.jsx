// src/components/SearchResults.jsx
import React from "react";

const SearchResults = ({ users }) => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map(user => (
        <div key={user.id} className="border p-4 rounded shadow">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-2"/>
          <h3 className="font-bold">{user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
