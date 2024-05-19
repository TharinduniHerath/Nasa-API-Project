const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }
  const user = await User.create({
    username,
    email,
    password,
  });
  console.log(`user created ${user}`);
  if (user) {
    res.status(201).json({
      status: "Success",
      data: {
        user: user,
      },
    });
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }
  // Remove the redundant line
  // res.json({ message: "Register the user" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({ email }).select("+password");
  //compare password with hashed password
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        //payload
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET, // Ensure this environment variable is set
      { expiresIn: "3600m" }
    );
    res.status(200).json({
      status: "success",
      accessToken,
    });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
};

const currentUser = async (req, res) => {
  // Ensure req.user is properly set before calling res.json(req.user)
  if (!req.user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  res.json(req.user);
};

module.exports = { registerUser, loginUser, currentUser };
