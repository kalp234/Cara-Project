const mongoose = require("mongoose");
const Product = require("./models/productModel");

const mongourl = "mongodb://localhost:27017/caraDB";

mongoose
  .connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    insertProducts();
  })
  .catch((err) => console.error("❌ Connection error:", err));

const insertProducts = async () => {
  try {
    const products = [
      {
        name: "Tropical Vibes Shirt",
        price: 599.0,
        description: "Stay cool and stylish with the Tropical Vibes Shirt. Made from breathable fabric, it's perfect for summer outings. The vibrant print adds a refreshing touch. Designed for comfort, it pairs well with jeans or shorts. A must-have for tropical getaways!",
        rating: "4.5",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376012/f1_rbgtjh.jpg"],
      },
      {
        name: "Floral Elegance Shirt",
        price: 699.0,
        description: "Elevate your casual wardrobe with the Floral Elegance Shirt. This soft cotton shirt features a delicate floral pattern. Ideal for brunches and evening outings. The relaxed fit ensures all-day comfort. Pair it with chinos for a classy look!",
        rating: "4.2",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376084/f2_zvg264.jpg"],
      },
      {
        name: "Vintage Bloom Shirt",
        price: 550.0,
        description: "A perfect blend of vintage charm and modern comfort. The Vintage Bloom Shirt features a timeless floral design. Crafted from high-quality fabric for durability. Its relaxed fit makes it ideal for casual wear. Dress it up with a blazer for a trendy look!",
        rating: "4.7",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376117/f3_bqpnsq.jpg"],
      },
      {
        name: "Modern Minimalist T-Shirt",
        price: 650.0,
        description: "For those who love simplicity, the Modern Minimalist T-Shirt is a must-have. Crafted from premium cotton, it's ultra-soft and breathable. A sleek design with subtle branding makes it versatile. Perfect for layering or wearing solo. A staple in every wardrobe!",
        rating: "4.3",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376154/f4_m1fcqx.jpg"],
      },
      {
        name: "Light Blue Linen Shirt (women)",
        price: 499.0,
        description: "Stay breezy and elegant with this linen shirt, ideal for warm weather. Breathable, comfortable, and chic for daily wear.",
        rating: "4.4",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376226/n1_o34shs.jpg"]
      },
      {
        name: "Checked Cotton Shirt (women)",
        price: 599.0,
        description: "Timeless checks in soft cotton. Ideal for casual outings and brunch dates. Pairs beautifully with jeans or skirts.",
        rating: "4.1",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376263/n2_k9q6jg.jpg"]
      },
      {
        name: "Classic White Shirt (women)",
        price: 399.0,
        description: "A wardrobe essential – the classic white shirt. Crisp, clean, and endlessly versatile. Dress it up or down.",
        rating: "4.6",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376296/n3_sg38wa.jpg"]
      },
      {
        name: "Printed Short Sleeve Shirt",
        price: 600.0,
        description: "Bold prints for bold days. Lightweight and stylish, this shirt brings fun to everyday fashion.",
        rating: "4.0",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376333/n4_j0sfs2.jpg"]
      },
      {
        name: "Denim Long Sleeve Shirt",
        price: 899.0,
        description: "Edgy meets casual. This denim shirt is a layering staple that never goes out of style.",
        rating: "4.5",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376444/n5_ylut6z.jpg"]
      },
      {
        name: "Striped Casual Shorts",
        price: 450.0,
        description: "Lightweight and playful, these shorts are perfect for beach days and chill weekends.",
        rating: "4.2",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376492/n6_kcnful.jpg"]
      },
      {
        name: "Beige Utility Shirt",
        price: 699.0,
        description: "Functional fashion. Utility pockets and neutral tones make this a statement piece with purpose.",
        rating: "4.3",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376644/n7_ts6fvm.jpg"]
      },
      {
        name: "Black Mandarin Collar Shirt",
        price: 499.0,
        description: "Modern elegance in black. The mandarin collar brings an upscale touch to your casual rotation.",
        rating: "4.6",
        images: ["https://res.cloudinary.com/demqwkfpy/image/upload/v1744376703/n8_xewvly.jpg"]
      },
    ];

    await Product.insertMany(products);
    console.log("✅ Products inserted successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error inserting products:", error);
  }
};
