import React, { createContext, useState } from "react";

  export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const total = cartItems.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,
    0
  );

  // Add clearCart method
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, total, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
