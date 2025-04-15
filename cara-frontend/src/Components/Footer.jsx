import React from 'react';
import "../App.css";
import logo from "../img/logo.png";
import app from "../img/pay/app.jpg";
import pay from "../img/pay/pay.png";
import play from "../img/pay/play.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img className="logo" src={logo} alt="Cara Logo" />
        <h4>Contact</h4>
        <p><strong>Address</strong>: Shop No.1, Ground Floor,<br />
          Satya-2, Next to Bharat Petrol Pump,<br />
          Opp. Ranna Park Bus Stop, Ghatlodia,<br />
          Ahmedabad-380061</p>
        <p><strong>Phone</strong>: (+91) 01234 56789</p>
        <p><strong>Hours</strong>: 10:00 - 18:00, Mon - Sat</p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <Link to="/about">About Us</Link>
        <Link to="/shop">Delivery Information</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="col">
        <h4>Account</h4>
        <Link to="/signup">Sign In</Link>
        <Link to="/cart">View Cart</Link>
        <Link to="/shop2">My Wishlist</Link>
        <Link to="/cart">Track My Order</Link>
        <Link to="/contact">Help</Link>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Play Store</p>
        <div className="row">
          <img src={app} alt="App Store" />
          <img src={play} alt="Play Store" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={pay} alt="Payment Options" />
      </div>

      <div className="copyright">
        <p>© 2025 Copyright Reserved / Cara</p>
      </div>
    </footer>
  );
};

export default Footer;
