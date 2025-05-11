import React, { useState } from "react";
import axios from "axios";

function Login({ setPage }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", credentials);
      console.log("Login successful:", response.data);
      setPage("role-selection");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>
          <img src="/login.png" alt="Login Icon" style={{ width: "28px" }} /> LOGIN
        </h2>
        <div className="login-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <div className="options">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button className="login-btn" onClick={handleLogin}>
            LOGIN
          </button>
        </div>
      </div>
      <div className="login-right">
        <img src="/Vote.jpeg" alt="Illustration" className="login-img" />
        <p>
          Don't have an account?{" "}
          <span className="signup-link" onClick={() => setPage("signup")}>
            Sign up
          </span>{" "}
          now!
        </p>
      </div>
    </div>
  );
}

export default Login;