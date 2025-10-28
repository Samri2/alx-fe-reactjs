import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); alert("Form submitted!"); }

  const inputStyle = { display: "block", margin: "10px 0", padding: "8px", width: "100%", borderRadius: "5px" };
  const buttonStyle = { padding: "10px 20px", background: "#1e90ff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <h1 style={{ color: "#1e90ff" }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} style={inputStyle} />
        <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} style={inputStyle} />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
