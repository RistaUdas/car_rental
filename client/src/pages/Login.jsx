import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      const token = response.data.token;

      // Store the token in sessionStorage
      sessionStorage.setItem("accessToken", token);

      // Redirect or perform other actions upon successful login
    } catch (error) {
      console.error("Error during login:", error);

      // Set the login error state to display an error message to the user
      setLoginError("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="username" className="form__label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
          className="form__input"
        />
      </div>
      <div>
        <label htmlFor="password" className="form__label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
          className="form__input"
        />
      </div>
      {loginError && <p className="error-message">{loginError}</p>}
      <button type="submit" className="btn form__btn">
        Login
      </button>
      <span>
        Don't have an account? <Link className="link" to="/registration">Register</Link>
      </span>
    </form>
  );
};

export default Login;
 