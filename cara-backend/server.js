const PORT = 2345;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userModel = require("./models/userModel");
require("dotenv").config();

const cartRoutes = require("./routes/cart.routes");
const mongourl = `mongodb+srv://kkalp234:TMGkMCPuJfzp8Gnc@caradb.xyz00wx.mongodb.net/?retryWrites=true&w=majority&appName=CaraDB`;
const mongourl2 = "mongodb://localhost:27017/caraDB";
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(mongourl2)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Express app is running");
});
app.use("/cart", cartRoutes);

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email is already registered" });
    }

    const newUser = new userModel({ name, email, password });
    await newUser.save();
    console.log(newUser);

    res.status(200).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

app.post("/userlogin", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }).then((user) => {
    if (user) {
      console.log(user);
      if (user.password === password) {
        return res.json(user);
      } else {
        res.json("Password is incorrect");
      }
    } else {
      res.json("No record exists");
    }
  });
});
