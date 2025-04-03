const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
 
  images: [
    {
      type: String 
    }
  ]
});

module.exports = mongoose.model('Product', ProductSchema);
