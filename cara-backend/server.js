require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const paymentRoutes = require("./routes/payment");
const cartRoutes = require("./routes/cart.routes");
const userModel = require("./models/userModel");

const app = express();
const PORT = process.env.PORT || 2345;
const mongourl = process.env.MONGO_URL;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(mongourl)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

mongoose.connection.once("open", () => {
  console.log(`📡 Connected to MongoDB: ${mongoose.connection.name}`);
});

// Routes
app.use("/api/payment", paymentRoutes);
app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("Express app is running");
});

// Signup Route
app.post("/signup", async (req, res) => {
  console.log("🔔 Signup route hit");
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("🔐 Hashed password:", hashedPassword);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Login Route
app.post("/userlogin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No user found with this email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Dummy token for now, replace with JWT in production
    res.status(200).json({
      message: "Login successful",
      accesstoken: "sampleaccesstoken",
      refreshtoken: "samplerefreshtoken",
      name: user.name,
      _id: user._id,
    });
    
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
