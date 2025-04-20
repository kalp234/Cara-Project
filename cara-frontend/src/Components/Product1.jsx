import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";




const products = [
  {
    _id: "67f920a52c502a46a4ce0d10",
    image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376012/f1_rbgtjh.jpg",
    name: "Tropical Vibes Shirt",
    price: 599,
    brand: "Adidas",
    description:
      "Stay cool and stylish with the Tropical Vibes Shirt. Made from breathable fabric, it's perfect for summer outings. The vibrant print adds a refreshing touch. Designed for comfort, it pairs well with jeans or shorts. A must-have for tropical getaways!",
    gallery: [
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376012/f1_rbgtjh.jpg",
        name: "Tropical Vibes Shirt",
        brand: "Adidas",
        price: 599,
        description: "Stay cool and stylish with the Tropical Vibes Shirt. Made from breathable fabric, it's perfect for summer outings. The vibrant print adds a refreshing touch. Designed for comfort, it pairs well with jeans or shorts. A must-have for tropical getaways!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376084/f2_zvg264.jpg",
        name: "Floral Elegance Shirt",
        brand: "Levi's",
        price: 699,
        description: "Elevate your casual wardrobe with the Floral Elegance Shirt. This soft cotton shirt features a delicate floral pattern. Ideal for brunches and evening outings. The relaxed fit ensures all-day comfort. Pair it with chinos for a classy look!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376117/f3_bqpnsq.jpg",
        name: "Vintage Bloom Shirt",
        brand: "H&M",
        price: 550,
        description: "A perfect blend of vintage charm and modern comfort. The Vintage Bloom Shirt features a timeless floral design. Crafted from high-quality fabric for durability. Its relaxed fit makes it ideal for casual wear. Dress it up with a blazer for a trendy look!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376154/f4_m1fcqx.jpg",
        name: "Modern Minimalist T-Shirt",
        brand: "Zara",
        price: 650,
        description: "For those who love simplicity, the Modern Minimalist T-Shirt is a must-have. Crafted from premium cotton, it's ultra-soft and breathable. A sleek design with subtle branding makes it versatile. Perfect for layering or wearing solo. A staple in every wardrobe!",
      },
    ],
  },
  {
    _id: "67f920a52c502a46a4ce0d11",
    image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376084/f2_zvg264.jpg",
    name: "Floral Elegance Shirt",
    price: 699,
    brand: "Levi's",
    description:
      "Elevate your casual wardrobe with the Floral Elegance Shirt. This soft cotton shirt features a delicate floral pattern. Ideal for brunches and evening outings. The relaxed fit ensures all-day comfort. Pair it with chinos for a classy look!",
    gallery: [
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376084/f2_zvg264.jpg",
        name: "Floral Elegance Shirt",
        brand: "Levi's",
        price: 699,
        description: "Elevate your casual wardrobe with the Floral Elegance Shirt. This soft cotton shirt features a delicate floral pattern. Ideal for brunches and evening outings. The relaxed fit ensures all-day comfort. Pair it with chinos for a classy look!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376012/f1_rbgtjh.jpg",
        name: "Tropical Vibes Shirt",
        brand: "Adidas",
        price: 599,
        description: "Stay cool and stylish with the Tropical Vibes Shirt. Made from breathable fabric, it's perfect for summer outings. The vibrant print adds a refreshing touch. Designed for comfort, it pairs well with jeans or shorts. A must-have for tropical getaways!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376117/f3_bqpnsq.jpg",
        name: "Vintage Bloom Shirt",
        brand: "H&M",
        price: 550,
        description: "A perfect blend of vintage charm and modern comfort. The Vintage Bloom Shirt features a timeless floral design. Crafted from high-quality fabric for durability. Its relaxed fit makes it ideal for casual wear. Dress it up with a blazer for a trendy look!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376154/f4_m1fcqx.jpg",
        name: "Modern Minimalist T-Shirt",
        brand: "Zara",
        price: 650,
        description: "For those who love simplicity, the Modern Minimalist T-Shirt is a must-have. Crafted from premium cotton, it's ultra-soft and breathable. A sleek design with subtle branding makes it versatile. Perfect for layering or wearing solo. A staple in every wardrobe!",
      },
    ],
  },
  {
    _id: "67f920a52c502a46a4ce0d12",
    image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376117/f3_bqpnsq.jpg",
    name: "Vintage Bloom Shirt",
    price: 550,
    brand: "H&M",
    description:
      "A perfect blend of vintage charm and modern comfort. The Vintage Bloom Shirt features a timeless floral design. Crafted from high-quality fabric for durability. Its relaxed fit makes it ideal for casual wear. Dress it up with a blazer for a trendy look!",
    gallery: [
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376117/f3_bqpnsq.jpg",
        name: "Vintage Bloom Shirt",
        brand: "H&M",
        price: 550,
        description: "A perfect blend of vintage charm and modern comfort. The Vintage Bloom Shirt features a timeless floral design. Crafted from high-quality fabric for durability. Its relaxed fit makes it ideal for casual wear. Dress it up with a blazer for a trendy look!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376012/f1_rbgtjh.jpg",
        name: "Tropical Vibes Shirt",
        brand: "Adidas",
        price: 599,
        description: "Stay cool and stylish with the Tropical Vibes Shirt. Made from breathable fabric, it's perfect for summer outings. The vibrant print adds a refreshing touch. Designed for comfort, it pairs well with jeans or shorts. A must-have for tropical getaways!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376084/f2_zvg264.jpg",
        name: "Floral Elegance Shirt",
        brand: "Levi's",
        price: 699,
        description: "Elevate your casual wardrobe with the Floral Elegance Shirt. This soft cotton shirt features a delicate floral pattern. Ideal for brunches and evening outings. The relaxed fit ensures all-day comfort. Pair it with chinos for a classy look!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376154/f4_m1fcqx.jpg",
        name: "Modern Minimalist T-Shirt",
        brand: "Zara",
        price: 650,
        description: "For those who love simplicity, the Modern Minimalist T-Shirt is a must-have. Crafted from premium cotton, it's ultra-soft and breathable. A sleek design with subtle branding makes it versatile. Perfect for layering or wearing solo. A staple in every wardrobe!",
      },
    ],
  },
  {
    _id: "67f920a52c502a46a4ce0d13",
    image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376154/f4_m1fcqx.jpg",
    name: "Modern Minimalist T-Shirt",
    price: 650,
    brand: "Zara",
    description:
      "For those who love simplicity, the Modern Minimalist T-Shirt is a must-have. Crafted from premium cotton, it's ultra-soft and breathable. A sleek design with subtle branding makes it versatile. Perfect for layering or wearing solo. A staple in every wardrobe!",
    gallery: [
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376154/f4_m1fcqx.jpg",
        name: "Modern Minimalist T-Shirt",
        brand: "Zara",
        price: 650,
        description: "For those who love simplicity, the Modern Minimalist T-Shirt is a must-have. Crafted from premium cotton, it's ultra-soft and breathable. A sleek design with subtle branding makes it versatile. Perfect for layering or wearing solo. A staple in every wardrobe!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376012/f1_rbgtjh.jpg",
        name: "Tropical Vibes Shirt",
        brand: "Adidas",
        price: 599,
        description: "Stay cool and stylish with the Tropical Vibes Shirt. Made from breathable fabric, it's perfect for summer outings. The vibrant print adds a refreshing touch. Designed for comfort, it pairs well with jeans or shorts. A must-have for tropical getaways!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376084/f2_zvg264.jpg",
        name: "Floral Elegance Shirt",
        brand: "Levi's",
        price: 699,
        description: "Elevate your casual wardrobe with the Floral Elegance Shirt. This soft cotton shirt features a delicate floral pattern. Ideal for brunches and evening outings. The relaxed fit ensures all-day comfort. Pair it with chinos for a classy look!",
      },
      {
        image: "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376117/f3_bqpnsq.jpg",
        name: "Vintage Bloom Shirt",
        brand: "H&M",
        price: 550,
        description: "A perfect blend of vintage charm and modern comfort. The Vintage Bloom Shirt features a timeless floral design. Crafted from high-quality fabric for durability. Its relaxed fit makes it ideal for casual wear. Dress it up with a blazer for a trendy look!",
      },
    ],
  },
];


const Product1 = () => {
  const user = JSON.parse(sessionStorage.getItem("user")); 
const userId = user?._id; 
  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post("https://cara-backend-hryb.onrender.com/cart/add", {
        userId,
        productId,
        quantity: 1,
      });

      if (response.status === 200) {
        toast.success("Item added to cart!");
      }
    } catch (error) {
      toast.error("Failed to add to cart.");
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Designs</p>
      <div className="pro-container">
        {products.map((product) => (
          <div className="pro" key={product._id}>
            <Link
              to={`/sproduct/${product._id}`}
              state={{ ...product, productId: product._id, userId }}
            >
              <img src={product.image} alt={product.name} />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>₹{product.price}</h4>
              </div>
            </Link>
            <i
              className="fa-solid fa-cart-shopping cart"
              onClick={() => handleAddToCart(product._id)}
            ></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product1;
