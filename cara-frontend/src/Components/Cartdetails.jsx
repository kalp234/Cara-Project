import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../api/AuthContext";
import { CartContext } from "../api/CartContext";

const Cartdetails = () => {
  const { user } = useContext(AuthContext);
  const userId = user?.userId;

  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2345/cart/${userId}`
        );
        console.log("Fetched cart:", response.data);
        setCartItems(response.data.items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        toast.error("Failed to load cart items");
      }
    };

    if (userId) fetchCartItems();
  }, [userId]);

  const removeItem = async (productId) => {
    try {
      await axios.post("http://localhost:2345/cart/remove", {
        userId,
        productId,
      });
      setCartItems((prev) =>
        prev.filter((item) => item.productId._id !== productId)
      );
      toast.success("Item removed from cart");
    } catch (error) {
      console.error("Error removing item:", error);
      toast.error("Failed to remove item");
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      await axios.post("http://localhost:2345/cart/update", {
        userId,
        productId,
        quantity,
      });
      setCartItems((prev) =>
        prev.map((item) =>
          item.productId._id === productId
            ? { ...item, quantity: parseInt(quantity) }
            : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
      toast.error("Failed to update quantity");
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,
    0
  );

  if (!userId) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold text-lg">
        Please login to continue
      </div>
    );
  }

  return (
    <section id="cart" className="section-p1">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <table width="100%">
        <thead>
          <tr>
            <td>REMOVE</td>
            <td>IMAGE</td>
            <td>PRODUCT</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
            <td>SUBTOTAL</td>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.productId._id}>
              <td>
                <button onClick={() => removeItem(item.productId._id)}>
                  <i className="far fa-times-circle text-red-500"></i>
                </button>
              </td>
              <td className="align-middle">
                <img
                  src={item.productId.images[0]}
                  alt={item.productId.name}
                  className="h-16 w-auto object-contain mx-auto"
                />
              </td>
              <td>{item.productId.name}</td>
              <td>₹{item.productId.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.productId._id, e.target.value)
                  }
                  className="w-16 px-2 py-1 border rounded"
                />
              </td>
              <td>₹{(item.productId.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4 font-semibold text-lg">
        Total: ₹{total.toFixed(2)}
      </div>
    </section>
  );
};

export default Cartdetails;
