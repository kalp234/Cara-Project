import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Scrolltotop";
import Header from "./Components/Header.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Homepage from "./Homepage.jsx";
import Shop from "./Pages/Shop.jsx";
import Shop2 from "./Pages/Shop2.jsx";
import Sproduct from "./Pages/Sproduct.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Cart from "./Pages/Cart.jsx";
import Blog from "./Pages/Blog.jsx";
import Blog2 from "./Pages/Blog2.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./api/AuthContext";
import { CartProvider } from "./api/CartContext";
import PrivateRoute from "./api/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <ToastContainer position="top-right" autoClose={2000} />
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop2" element={<Shop2 />} />
            <Route path="/sproduct/:id" element={<Sproduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
