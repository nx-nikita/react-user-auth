import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        paddingTop:"20px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 25px",
        color: "black",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <h2 style={{ margin: 0 }}>{title}</h2>
      <button
        onClick={() => navigate("/")}
        style={{
          
        }}
      >
      
      </button>
    </div>
  );
};

export default Navbar;
