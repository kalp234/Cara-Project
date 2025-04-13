const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Cart = require("../models/cart.model");
const User = require("../models/userModel");
const Product = require("../models/productModel");

// POST: Add to cart
router.post("/add", async (req, res) => {
  try {
    let { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).json({
        message: "Missing required fields: userId, productId, or quantity",
      });
    }

    if (quantity <= 0 || isNaN(quantity)) {
      return res
        .status(400)
        .json({ message: "Quantity must be a positive number" });
    }

    const userObjectId = new mongoose.Types.ObjectId(userId);
    const productObjectId = new mongoose.Types.ObjectId(productId);

    const user = await User.findById(userObjectId);
    const product = await Product.findById(productObjectId);

    if (!user) return res.status(404).json({ message: "User not found" });
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ userId: userObjectId });

    if (!cart) {
      cart = new Cart({
        userId: userObjectId,
        items: [{ productId: productObjectId, quantity }],
      });
    } else {
      const existingItemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productObjectId.toString()
      );

      if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId: productObjectId, quantity });
      }
    }

    await cart.save();
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res
      .status(500)
      .json({ message: "Failed to add to cart", error: error.message });
  }
});


// GET: Fetch cart by userId
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("userId:", userId);
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    let cart = await Cart.findOne({ userId }).populate("items.productId");

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
