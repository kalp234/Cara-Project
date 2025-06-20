import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const total = cartItems.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, total }}>
      {children}
    </CartContext.Provider>
  );
};
