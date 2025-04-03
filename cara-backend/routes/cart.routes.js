const express = require('express');
const router = express.Router();
const Cart = require('../models/cart.model'); // Assuming you have a Cart model for MongoDB
const User = require('../models/userModel'); // Assuming you have a User model for MongoDB
const Product = require('../models/productModel'); // Assuming you have a Product model for MongoDB

// POST request to add product to cart
router.post('/cart/add', async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    // Check for missing fields
    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: 'Missing required fields: userId, productId, or quantity' });
    }

    // Validate quantity (ensure it's a positive number)
    if (quantity <= 0 || isNaN(quantity)) {
      return res.status(400).json({ message: 'Quantity must be a positive number' });
    }

    // Validate if user and product exist
    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    console.log(user, product);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if the product already exists in the cart
    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      // If the product is already in the cart, update the quantity
      cartItem.quantity += quantity; // You can change this logic to meet your requirements
      await cartItem.save();
      return res.status(200).json({ message: 'Cart item updated' });
    }

    // If product doesn't exist in cart, create a new cart item
    cartItem = new Cart({
      userId,
      productId,
      quantity,
    });

    await cartItem.save();

    res.status(200).json({ message: 'Item added to cart' });
  } catch (error) {
    // Log the error and send a response
    console.error('Error adding to cart:', error.message);
    res.status(500).json({
      message: 'Failed to add to cart',
      error: error.message,
    });
  }
});

module.exports = router;
