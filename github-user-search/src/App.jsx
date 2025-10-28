// src/App.jsx
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import SearchUser from "./components/searchUser";

function App() {
  const [users, setUsers] = useState([]);

  return (
   
     <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1 style={{ marginTop: "30px", color: "navy" }}>GitHub User Search</h1>
      <SearchUser />
      <h1>GitHub User Search 🔍</h1>
      <SearchBar setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
