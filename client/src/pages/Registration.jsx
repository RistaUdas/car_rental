import React, { useState } from "react";
import "../styles/registration.css";
import axios from "axios";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add error state

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the user's data
    const userData = {
      username,
      email,
      phoneNumber,
      password,
    };

    try {
      // Send a POST request to your server's registration endpoint
      const response = await axios.post(
        "http://localhost:3001/auth",
        userData
      );

      // Handle the response from the server as needed
      console.log("Registration successful", response.data);

      // Clear the form fields after successful registration
      setUsername("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setError(""); // Clear any previous errors
    } catch (error) {
      // Handle any errors from the server
      console.error("Registration failed", error);
      setError("Registration failed. Please try again."); // Set error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <h6 className="fw-bold fs-large">Registration Form</h6>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>

      {error && <p className="error">{error}</p>} {/* Display error message */}
      
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
