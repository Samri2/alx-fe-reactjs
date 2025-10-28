function Navbar({ setPage }) {
  const navStyle = {
    position: "fixed",        // stays at the top
    top: 0,
    left: 0,
    width: "100%",
    padding: "18px",
    background: "#1e90ff",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "white",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)", // subtle shadow
    zIndex: 1000
  };

  const buttonStyle = {
    background: "white",
    color: "#1e90ff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"   // smooth hover effect
  };

  const buttonHover = e => e.target.style.background = "#f0f0f0";
  const buttonOut = e => e.target.style.background = "white";

  return (
    <nav style={navStyle}>
      <button style={buttonStyle} onClick={() => setPage("home")} onMouseEnter={buttonHover} onMouseLeave={buttonOut}>Home</button>
      <button style={buttonStyle} onClick={() => setPage("about")} onMouseEnter={buttonHover} onMouseLeave={buttonOut}>About</button>
      <button style={buttonStyle} onClick={() => setPage("services")} onMouseEnter={buttonHover} onMouseLeave={buttonOut}>Services</button>
      <button style={buttonStyle} onClick={() => setPage("contact")} onMouseEnter={buttonHover} onMouseLeave={buttonOut}>Contact</button>
    </nav>
  );
}

export default Navbar;
