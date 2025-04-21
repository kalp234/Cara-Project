import React, { useState } from "react";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const Prodetails = () => {
  const location = useLocation();
  const {
    name,
    price,
    image,
    gallery = [],
    description,
    brand,
    productId,
  } = location.state || {};

  const [mainImage, setMainImage] = useState(image);
  const [mainName, setMainName] = useState(name);
  const [mainBrand, setMainBrand] = useState(brand);
  const [mainPrice, setMainPrice] = useState(price);
  const [mainDescription, setMainDescription] = useState(description);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async (productId) => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    const userId = storedUser?._id;

    if (!userId) {
      toast.error("Please login to add items to your cart.");
      return;
    }

    try {
      console.log("Sending to /cart/add:", {
        userId,
        productId,
        quantity,
      });
      const response = await axios.post("https://cara-backend-hryb.onrender.com/cart/add", {

        userId,
        productId,
        quantity,

      });

      if (response.status === 200) {
        toast.success("Item added to cart!");
      }
    } catch (error) {
      toast.error("Failed to add to cart.");
      console.error("Error adding to cart:", error);
    }
  };

  const handleThumbnailClick = (img) => {
    setMainImage(img.image);
    setMainName(img.name);
    setMainBrand(img.brand);
    setMainPrice(img.price);
    setMainDescription(img.description);
  };

  return (
    <section id="prodetails" className="section-p1">
      <div className="single-pro-img">
        <img src={mainImage} width="100%" id="Mainimg" alt={mainName} />
        <div className="small-img-grp">
          {gallery.map((img, index) => (
            <div className="small-img-col" key={index}>
              <img
                src={img.image}
                width="100%"
                className="small-img"
                alt={img.name}
                onClick={() => handleThumbnailClick(img)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="single-pro-details">
        <h6 className="text-gray-500">Home / {mainBrand}</h6>
        <h4 className="underline">{mainName}</h4>
        <h2>₹{mainPrice}.00</h2>

        <div className="flex flex-col items-start gap-4 mt-4">
          <div className="flex items-center border rounded">
            <button
              className="px-3 py-1"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-10 text-center outline-none border-x"
            />
            <button
              className="px-3 py-1"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <button
            className="px-4 py-1 normal text-white rounded hover:bg-gray-800 transition"
            onClick={() => handleAddToCart(productId)}
          >
            Add To Cart
          </button>
        </div>

        <h4>Product Details</h4>
        <span>{mainDescription}</span>
      </div>
    </section>
  );
};

export default Prodetails;
