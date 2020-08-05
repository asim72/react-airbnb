const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtSecret = config.get("jwtSecret");

router.post("/register", async (req, res) => {
  const { username, email, password, passwordConfirmation } = req.body;
  try {
    if (!email || !password) {
      return res.status(402).send({
        errors: [{ detail: "Provide Email And Password" }],
      });
    }

    if (password !== passwordConfirmation) {
      return res.status(402).send({
        errors: [{ detail: "Password Doesnt Match" }],
      });
    }

    let user = await User.findOne({ email });

    if (user) {
      return res.status(402).send({
        errors: [{ detail: "User already exist" }],
      });
    }

    user = new User({ username, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    await jwt.sign(
      { userId: user.id, username: user.username },
      jwtSecret,
      (err, token) => {
        if (err) throw err;

        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("server error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(402).send({
        errors: [
          {
            detail: "Provide Email And Password",
          },
        ],
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(402).send({
        errors: [{ detail: "User Does Not Exist" }],
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(402).send({
        errors: [{ detail: "Password Invalid" }],
      });
    }

    await jwt.sign(
      { userId: user.id, username: user.username },
      jwtSecret,
      (err, token) => {
        if (err) throw err;

        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("server error");
  }
});

module.exports = router;
