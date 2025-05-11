import React, { useState } from "react";
import axios from "axios";

function Signup({ setPage }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log("Form data being sent:", formData); // Log form data
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", formData);
      console.log("Signup successful:", response.data);
      setPage("role-selection");
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response) {
        console.error("Backend error response:", error.response.data);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2>
          <img src="/singup.png" alt="Signup Icon" style={{ width: "28px" }} /> SIGN UP
        </h2>
        <div className="signup-box">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="signup-btn" onClick={handleSubmit}>
            SIGN UP
          </button>
          <p>
            Already have an account?{" "}
            <span className="signup-link" onClick={() => setPage("login")}>
              Login
            </span>
          </p>
        </div>
      </div>
      <div className="signup-right">
        <img src="/signupimg.jpg" alt="Illustration" className="signup-img" />
        <p>Your voice matters. Join us today!</p>
      </div>
    </div>
  );
}

export default Signup;
