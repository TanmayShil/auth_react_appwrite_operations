import { useState } from "react";
import { account } from "../appwrite/config";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await account.create("unique()", email, password, name);
            navigate("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    const containerStyle = {
    display: "flex",
    height: "98vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  };

  const formStyle = {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const linkStyle = {
    textAlign: "center",
    marginTop: "10px",
    fontSize: "14px",
  };

    return (
       <div style={containerStyle}>
      <form onSubmit={handleSignup} style={formStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Signup</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Signup</button>
        <div style={linkStyle}>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
    );
}
