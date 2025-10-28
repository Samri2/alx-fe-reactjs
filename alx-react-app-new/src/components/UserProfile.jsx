// src/components/UserProfile.jsx
const UserProfile = (props) => {
  return (
    <div style={{
      border: "2px solid #4F46E5",
      borderRadius: "10px",
      padding: "20px",
      width: "250px",
      textAlign: "center",
      backgroundColor: "#F3F4F6",
      margin: "20px auto",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
    }}>
      <h2  style={{ color: 'blue', fontSize: '1.5rem' }}>{props.name}</h2>
      <p style={{ fontWeight: 'bold', color: 'darkgreen' }}>Age: {props.age}</p>
      <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
