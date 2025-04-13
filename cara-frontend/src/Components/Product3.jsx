import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import k1 from "../img/products/k1.webp";
import k2 from "../img/products/k2.webp";
import k3 from "../img/products/k3.webp";
import k4 from "../img/products/k4.webp";
import k5 from "../img/products/k5.webp";
import k6 from "../img/products/k6.webp";
import k7 from "../img/products/k7.webp";
import k8 from "../img/products/k8.webp";
import k9 from "../img/products/k9.webp";
import k10 from "../img/products/k10.webp";
import k11 from "../img/products/k11.webp";
import k12 from "../img/products/k12.webp";

const products = [
  { id: 1, image: k1, brand: "Adidas", name: "Tropical Paradise Shirt", price: 599.00 },
  { id: 2, image: k2, brand: "Nike", name: "Abstract Art Shirt", price: 499.00 },
  { id: 3, image: k3, brand: "Puma", name: "Ocean Breeze Shirt", price: 599.00 },
  { id: 4, image: k4, brand: "Reebok", name: "Retro Floral Shirt", price: 599.00 },
  { id: 5, image: k5, brand: "Zara", name: "Monochrome Pulse Shirt", price: 899.00 },
  { id: 6, image: k6, brand: "H&M", name: "Cloudburst Art Shirt (women)", price: 499.00 },
  { id: 7, image: k7, brand: "Levi's", name: "Sunset Waves Shirt", price: 650.00 },
  { id: 8, image: k8, brand: "Gucci", name: "Botanic Luxe Dress (women)", price: 799.00 },
  { id: 9, image: k9, brand: "Nike", name: "Floral Embroidered Pants (women)", price: 1099.00 },
  { id: 10, image: k10, brand: "Zara", name: "Elegant Boho Skirt (women)", price: 999.00 },
  { id: 11, image: k11, brand: "Hugo Boss", name: "Classic Formal Shirt", price: 550.00 },
  { id: 12, image: k12, brand: "Armani", name: "Minimalist Blue Shirt", price: 550.00 },
]

const Product2 = () => {
  return (
    <section id="product1" className="section-p1">
      <h2>Genz Fashion</h2>
      <p>Summer Collection New Modern Designs</p>
      <div className="pro-container">
        {products.map((product) => (
          <Link to={`/sproduct/${product.id}`} className="pro" key={product.id}>
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
            <i className="fa-solid fa-cart-shopping cart"></i>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Product2;
