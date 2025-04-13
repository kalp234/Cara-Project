import React from "react";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons <span>& up to 70% off!</span></p>
      <Link to={"/shop"}>
      <button>Shop Now</button>
      </Link>
    </section>
  );
};

export default Hero;
