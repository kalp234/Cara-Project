import axios from "axios";

const API_URL = "https://cara-project.onrender.com/cart";

export const addToCart = async (userId, productId, quantity) => {
  try {
    const response = await axios.post(`${API_URL}/add`, { userId, productId, quantity });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
