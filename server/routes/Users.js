const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, email, phoneNumber, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await Users.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await Users.create({
      username,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    // Sign a JWT token upon successful registration
    const accessToken = sign(
      { username: newUser.username, id: newUser.id },
      "your-secret-key"
    );

    // Return the token to the client
    res.status(201).json({ token: accessToken });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ where: { username: username } });

    if (!user) {
      return res.status(401).json({ error: "User Doesn't Exist" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: "Wrong username and password combination" });
    }

    // Sign a JWT token upon successful login
    const accessToken = sign({ username: user.username, id: user.id }, "your-secret-key");

    // Return the token to the client
    res.json({ token: accessToken });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
