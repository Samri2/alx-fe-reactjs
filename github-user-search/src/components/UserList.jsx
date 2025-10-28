// src/components/UserList.jsx
const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{ border: "1px solid gray", margin: "10px", padding: "5px" }}>
          <h3>{user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
        </div>
      ))}
    </div>
  );
};

export default UserList;
