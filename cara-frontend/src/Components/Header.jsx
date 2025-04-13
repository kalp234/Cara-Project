import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../api/AuthContext";
import logo from "../img/logo.png";
import bag from "../img/bag.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

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
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });

    return () => {
      if (bar)
        bar.removeEventListener("click", () => nav.classList.add("active"));
      if (close)
        close.removeEventListener("click", () =>
          nav.classList.remove("active")
        );
    };
  }, []);

  return (
    <section id="header" className="md:mr-[-50px]">
      <a href="#">
        <img src={logo} className="logo" alt="Logo" />
      </a>
      <div>
        <ul id="navbar">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact Us
            </NavLink>
          </li>
          <li className="cart">
            <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
              <img src={bag} width="22px" height="18px" className="mb-1" alt="cart" />
            </NavLink>
          </li>

          {user ? (
            <li className="account flex flex-col">
              <span className="text-gray-700 font-semibold pb-2">
  Welcome, {user?.name}
</span>
              <button
                onClick={logout}
                className="bg-[#088178] text-white px-3 py-1 md:ml-14 rounded w-24"
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="account">
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="fa-solid fa-circle-user mb-1" style={{ fontSize: "23px" }}></i>
                <span className="ml-2">Sign up / Login</span>
              </NavLink>
            </li>
          )}

          <a href="#" id="close">
            <i className="fa-solid fa-xmark"></i>
          </a>
        </ul>
      </div>

      <div id="mobile">
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
          <img src={bag} width="22px" height="18px" alt="cart" />
        </NavLink>
        <i id="bar" className="fas fa-outdent"></i>

        {user ? (
          <div className="mobile-user-info desktop-user-info">
            <span className="text-gray-700 font-semibold block mt-2">
  Welcome, {user?.name}
</span> 
            <button
              onClick={logout}
              className="bg-[#088178] text-white px-3 py-1 mt-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="mobile-account mt-2 desktop-user-info">
            <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>
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
