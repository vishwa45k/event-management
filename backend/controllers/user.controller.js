const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        email,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1hr" }
    );

    return res
      .status(200)
      .json({ message: "User logged in", user, token: token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const signup = async (req, res) => {
  const { name, role, password, email } = req.body;

  try {
    if (!name || !role || !password || !email) {
      return res.status(400).json({ message: "Missing credentials" });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { signup, login };
