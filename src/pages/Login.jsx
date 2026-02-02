import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";  

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password } = formData;

    // 🔴 Empty field check
    if (!fullName || !phone || !email || !password) {
      alert("❌ Please fill all required fields");
      return;
    }

    // 🔴 Phone number validation (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      alert("❌ Phone number must be 10 digits");
      return;
    }

    // 🔴 Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("❌ Please enter a valid email address");
      return;
    }

    // 🔴 Password validation
    if (password.length < 8) {
      alert("❌ Password must be at least 8 characters long");
      return;
    }

    // ✅ All validations passed
    navigate("/profile");
  };

  return (
    <div className="register-container">
      <h2 className="register-title">
        Create your <br /> PopX account
      </h2>

      <div className="register-field">
        <label>Full Name*</label>
        <input
          type="text"
          name="fullName"
          placeholder="Marry Doe"
          onChange={handleChange}
        />
      </div>

      <div className="register-field">
        <label>Phone number*</label>
        <input
          type="text"
          name="phone"
          placeholder="9876543210"
          onChange={handleChange}
        />
      </div>

      <div className="register-field">
        <label>Email address*</label>
        <input
          type="email"
          name="email"
          placeholder="marry@gmail.com"
          onChange={handleChange}
        />
      </div>

      <div className="register-field">
        <label>Password*</label>
        <input
          type="password"
          name="password"
          placeholder="Minimum 8 characters"
          onChange={handleChange}
        />
      </div>

      <div className="register-field">
        <label>Company name</label>
        <input
          type="text"
          name="company"
          placeholder="PopX"
          onChange={handleChange}
        />
      </div>

      <div className="register-radio">
        <p>Are you an Agency?*</p>

        <label>
          <input
            type="radio"
            name="agency"
            value="yes"
            checked={formData.agency === "yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="no"
            checked={formData.agency === "no"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <button className="register-btn" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
};

export default Login;
