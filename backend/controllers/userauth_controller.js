const User = require("../models/userauth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    expiresIn: "1d",
      res.status(201).json({
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//     async function generateHash() {
//   const plainPassword = 'admin123'; // change this to your desired admin password
//   const hashed = await bcrypt.hash(plainPassword, 10);
//   console.log('Hashed password:', hashed);
// }

// generateHash();

exports.verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from "Bearer token"
  if (!token) return res.status(401).json({ msg: "Access denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ msg: "Invalid token" });

    if (decoded.role !== "admin") {
      return res.status(403).json({ msg: "Admins only" });
    }

    req.user = decoded;
    next();
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("User does not exist!! Signup first");
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).send(err.message || "Server error");
  }
};

exports.logout = async (req, res) => {
  try {
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).send(err.message || "Server error");
  }
};
