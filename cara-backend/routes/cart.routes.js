const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.model"); 
const User = require("../models/userModel"); 
const Product = require("../models/productModel"); 
const mongoose = require("mongoose");


router.post("/add", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    if (!userId || !productId || !quantity) {
      return res.status(400).json({
        message: "Missing required fields: userId, productId, or quantity",
      });
    }

    if (quantity <= 0 || isNaN(quantity)) {
      return res.status(400).json({ message: "Quantity must be a positive number" });
    }

    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if product already exists in the cart
    const existingItemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId
    );

    if (existingItemIndex !== -1) {
      // Update quantity if product already in cart
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Push new product to cart
      console.log("Before push:", cart.items);
      cart.items.push({ productId, quantity });
      console.log("After push:", cart.items);
    }
    console.log("Before saving cart:", JSON.stringify(cart, null, 2));
    await cart.save();
    console.log("Saved cart:", JSON.stringify(cart, null, 2));
    
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(500).json({
      message: "Failed to add to cart",
      error: error.message,
    });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    let cart = await Cart.findOne({ userId }).populate("items.productId");
    console.log("Fetched and populated cart:", JSON.stringify(cart, null, 2));

    if (!cart) {
      cart = new Cart({
        userId,
        items: [],
      });
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error.message);
    res.status(500).json({
      message: "Failed to fetch or create cart",
      error: error.message,
    });
  }
});

// POST: Remove item from cart
router.post("/remove", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to remove item", error: error.message });
  }
});

// POST: Update item quantity in cart
router.post("/update", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    if (!userId || !productId || quantity === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (quantity <= 0 || isNaN(quantity)) {
      return res
        .status(400)
        .json({ message: "Quantity must be a positive number" });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    cart.items[itemIndex].quantity = quantity;
    await cart.save();

    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update cart", error: error.message });
  }
});

module.exports = router;
