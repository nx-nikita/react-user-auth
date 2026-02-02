import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signin.css";  

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormFilled = email.trim() !== "" && password.trim() !== "";

  const handleLogin = () => {
    navigate("/profile");   // ✅ DIRECT REDIRECT
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Signin to your PopX account</h2>

      <p className="signin-subtitle">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit.
      </p>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className={`signin-btn ${isFormFilled ? "active" : ""}`}
        disabled={!isFormFilled}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Signin;
