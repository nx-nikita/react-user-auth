import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";  

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to PopX</h2>

      <p className="home-subtitle">
        Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing elit.
      </p>

      <button
        className="home-primary-btn"
        onClick={() => navigate("/login")}
      >
        Create Account
      </button>

      <button
        className="home-secondary-btn"
        onClick={() => navigate("/Signin")}
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default Home;  