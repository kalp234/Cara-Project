const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.model"); 
const User = require("../models/userModel"); 
const Product = require("../models/productModel"); 


router.post("/cart/add", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    if (!userId || !productId || !quantity) {
      return res
        .status(400)
        .json({
          message: "Missing required fields: userId, productId, or quantity",
        });
    }
    if (quantity <= 0 || isNaN(quantity)) {
      return res
        .status(400)
        .json({ message: "Quantity must be a positive number" });
    }

    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    console.log(user, product);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
      return res.status(200).json({ message: "Cart item updated" });
    }

    cartItem = new Cart({
      userId,
      productId,
      quantity,
    });

    await cartItem.save();

    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(500).json({
      message: "Failed to add to cart",
      error: error.message,
    });
  }
});

module.exports = router;
