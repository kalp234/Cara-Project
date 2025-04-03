const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type:String, ref: "User", required: true },
  items: [
    {
      productId: { type: String, ref: "Product", required: true },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
