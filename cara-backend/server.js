const PORT = 2345;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const cartRoutes = require("./routes/cart.routes");
const mongourl=`mongodb+srv://kkalp234:TMGkMCPuJfzp8Gnc@caradb.xyz00wx.mongodb.net/?retryWrites=true&w=majority&appName=CaraDB`;

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(mongourl)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Express app is running");
});

// Use cart routes
app.use("/cart", cartRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

app.post("/cart/add", (req, res) => {
    console.log(req.body); // Check the incoming data
    // Proceed with your logic here
  });