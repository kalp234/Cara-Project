import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../api/AuthContext";
import { CartContext } from "../api/CartContext";
import logo from "../img/logo.png";
import bag from "../img/bag.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const closeNav = () => {
    const nav = document.getElementById("navbar");
    if (nav) {
      nav.classList.remove("active");
    }
  };

  useEffect(() => {
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const nav = document.getElementById("navbar");
    const navLinks = document.querySelectorAll("#navbar a");

    if (bar && nav) {
      bar.addEventListener("click", () => {
        nav.classList.add("active");
      });
    }

    if (close && nav) {
      close.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    return () => {
      if (bar) bar.removeEventListener("click", () => nav.classList.add("active"));
      if (close) close.removeEventListener("click", () => nav.classList.remove("active"));
      navLinks.forEach((link) => {
        link.removeEventListener("click", closeNav);
      });
    };
  }, []);

  return (
    <section id="header" className="md:mr-[-50px]">
      <a href="#">
        <img src={logo} className="logo" alt="Logo" />
      </a>

      <ul id="navbar">
        <li>
          <NavLink to="/" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>
            Contact Us
          </NavLink>
        </li>
        <li className="cart relative">
          <NavLink to="/cart" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>
            <img src={bag} width="22px" height="18px" className="mb-1" alt="cart" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-[-5px] bg-[#088178] text-white text-xs px-1 rounded-full">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </li>

        {user ? (
          <li className="account flex flex-col">
            <span className="text-gray-700 font-semibold pb-2">Welcome, {user?.name}</span>
            <button
              onClick={() => {
                logout();
                closeNav();
              }}
              className="bg-[#088178] text-white px-3 py-1 md:ml-14 rounded w-24"
            >
              Logout
            </button>
          </li>
        ) : (
          <li className="account">
            <NavLink to="/signup" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>
              <i className="fa-solid fa-circle-user mb-1" style={{ fontSize: "23px" }}></i>
              <span className="ml-2">Sign up / Login</span>
            </NavLink>
          </li>
        )}

        <a href="#" id="close">
          <i className="fa-solid fa-xmark"></i>
        </a>
      </ul>

      <div id="mobile">
        <NavLink to="/cart" onClick={closeNav} className="relative">
          <img src={bag} width="22px" height="18px" alt="cart" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-[10px] bg-[#088178] text-white text-xs px-1 rounded-full">
              {cartItems.length}
            </span>
          )}
        </NavLink>
        <i id="bar" className="fas fa-outdent"></i>

        {user ? (
          <div className="mobile-user-info desktop-user-info">
            <span className="text-gray-700 font-semibold block mt-2">
              Welcome, {user?.name}
            </span>
            <button
              onClick={() => {
                logout();
                closeNav();
              }}
              className="bg-[#088178] text-white px-3 py-1 mt-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="mobile-account mt-2 desktop-user-info">
            <NavLink to="/signup" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>
              <i className="fa-solid fa-circle-user mb-1" style={{ fontSize: "23px" }}></i>
              <span className="ml-2">Sign up / Login</span>
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
