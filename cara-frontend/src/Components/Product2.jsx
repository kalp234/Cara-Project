import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const products = [
  {
    id: "67f920a52c502a46a4ce0d14",
    image:
      "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376263/n2_k9q6jg.jpg",
    name: "Light Blue Linen Shirt (women)",
    price: 499.0,
    brand: "Adidas",
    description:
      "Stay breezy and elegant with this linen shirt, ideal for warm weather. Breathable, comfortable, and chic for daily wear.",
    gallery: [
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376226/n1_o34shs.jpg",
        name: "Light Blue Linen Shirt (women)",
        brand: "Adidas",
        price: 499.0,
        description:
          "Stay breezy and elegant with this linen shirt, ideal for warm weather. Breathable, comfortable, and chic for daily wear.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376263/n2_k9q6jg.jpg",
        name: "Checked Cotton Shirt (women)",
        brand: "Levi's",
        price: 599.0,
        description:
          "Timeless checks in soft cotton. Ideal for casual outings and brunch dates. Pairs beautifully with jeans or skirts.",
      },
      {
        image:   "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376296/n3_sg38wa.jpg",
        name: "Classic White Shirt (women)",
        brand: "Nike",
        price: 399.0,
        description:
          "A wardrobe essential – the classic white shirt. Crisp, clean, and endlessly versatile. Dress it up or down.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376333/n4_j0sfs2.jpg",
        name: "Printed Short Sleeve Shirt",
        brand: "Puma",
        price: 600.0,
        description:
          "Bold prints for bold days. Lightweight and stylish, this shirt brings fun to everyday fashion.",
      },
    ],
  },
  {
    id: "67f920a52c502a46a4ce0d15",
    image:
      "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376263/n2_k9q6jg.jpg",
    name: "Checked Cotton Shirt (women)",
    price: 599.0,
    brand: "Levi's",
    description:
      "Timeless checks in soft cotton. Ideal for casual outings and brunch dates. Pairs beautifully with jeans or skirts.",
    gallery: [
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376263/n2_k9q6jg.jpg",
        name: "Checked Cotton Shirt (women)",
        brand: "Levi's",
        price: 599.0,
        description:
          "Timeless checks in soft cotton. Ideal for casual outings and brunch dates. Pairs beautifully with jeans or skirts.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376296/n3_sg38wa.jpg",
        name: "Classic White Shirt (women)",
        brand: "Nike",
        price: 399.0,
        description:
          "A wardrobe essential – the classic white shirt. Crisp, clean, and endlessly versatile. Dress it up or down.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376333/n4_j0sfs2.jpg",
        name: "Printed Short Sleeve Shirt",
        brand: "Puma",
        price: 600.0,
        description:
          "Bold prints for bold days. Lightweight and stylish, this shirt brings fun to everyday fashion.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376226/n1_o34shs.jpg",
        name: "Light Blue Linen Shirt (women)",
        brand: "Adidas",
        price: 499.0,
        description:
          "Stay breezy and elegant with this linen shirt, ideal for warm weather. Breathable, comfortable, and chic for daily wear.",
      },
    ],
  },
  {
    id: "67f920a52c502a46a4ce0d16",
    image:
      "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376296/n3_sg38wa.jpg",
    name: "Classic White Shirt (women)",
    price: 399.0,
    brand: "Nike",
    description:
      "A wardrobe essential – the classic white shirt. Crisp, clean, and endlessly versatile. Dress it up or down.",
    gallery: [
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376296/n3_sg38wa.jpg",
        name: "Classic White Shirt (women)",
        brand: "Nike",
        price: 399.0,
        description:
          "A wardrobe essential – the classic white shirt. Crisp, clean, and endlessly versatile. Dress it up or down.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376333/n4_j0sfs2.jpg",
        name: "Printed Short Sleeve Shirt",
        brand: "Puma",
        price: 600.0,
        description:
          "Bold prints for bold days. Lightweight and stylish, this shirt brings fun to everyday fashion.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376444/n5_ylut6z.jpg",
        name: "Denim Long Sleeve Shirt",
        brand: "Zara",
        price: 899.0,
        description:
          "Edgy meets casual. This denim shirt is a layering staple that never goes out of style.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376492/n6_kcnful.jpg",
        name: "Striped Casual Shorts",
        brand: "H&M",
        price: 450.0,
        description:
          "Lightweight and playful, these shorts are perfect for beach days and chill weekends.",
      },
    ],
  },
  {
    id: "67f920a52c502a46a4ce0d17",
    image:
      "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376333/n4_j0sfs2.jpg",
    name: "Printed Short Sleeve Shirt",
    price: 600.0,
    brand: "Puma",
    description:
      "Bold prints for bold days. Lightweight and stylish, this shirt brings fun to everyday fashion.",
    gallery: [
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376333/n4_j0sfs2.jpg",
        name: "Printed Short Sleeve Shirt",
        brand: "Puma",
        price: 600.0,
        description:
          "Bold prints for bold days. Lightweight and stylish, this shirt brings fun to everyday fashion.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376296/n3_sg38wa.jpg",
        name: "Classic White Shirt (women)",
        brand: "Nike",
        price: 399.0,
        description:
          "A wardrobe essential – the classic white shirt. Crisp, clean, and endlessly versatile. Dress it up or down.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376263/n2_k9q6jg.jpg",
        name: "Checked Cotton Shirt (women)",
        brand: "Levi's",
        price: 599.0,
        description:
          "Timeless checks in soft cotton. Ideal for casual outings and brunch dates. Pairs beautifully with jeans or skirts.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376226/n1_o34shs.jpg",
        name: "Light Blue Linen Shirt (women)",
        brand: "Adidas",
        price: 499.0,
        description:
          "Stay breezy and elegant with this linen shirt, ideal for warm weather. Breathable, comfortable, and chic for daily wear.",
      },
    ],
  },
  {
    id: "67f920a52c502a46a4ce0d18",
    image:
      "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376444/n5_ylut6z.jpg",
    name: "Denim Long Sleeve Shirt",
    price: 899.0,
    brand: "Zara",
    description:
      "Edgy meets casual. This denim shirt is a layering staple that never goes out of style.",
    gallery: [
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376444/n5_ylut6z.jpg",
        name: "Denim Long Sleeve Shirt",
        brand: "Zara",
        price: 899.0,
        description:
          "Edgy meets casual. This denim shirt is a layering staple that never goes out of style.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376492/n6_kcnful.jpg",
        name: "Striped Casual Shorts",
        brand: "H&M",
        price: 450.0,
        description:
          "Lightweight and playful, these shorts are perfect for beach days and chill weekends.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376644/n7_ts6fvm.jpg",
        name: "Beige Utility Shirt",
        brand: "Gucci",
        price: 699.0,
        description:
          "Functional fashion. Utility pockets and neutral tones make this a statement piece with purpose.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376703/n8_xewvly.jpg",
        name: "Black Mandarin Collar Shirt",
        brand: "Balenciaga",
        price: 499.0,
        description:
          "Modern elegance in black. The mandarin collar brings an upscale touch to your casual rotation.",
      },
    ],
  },
  {
    id: "67f920a52c502a46a4ce0d19",
    image:
      "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376492/n6_kcnful.jpg",
    name: "Striped Casual Shorts",
    price: 450.0,
    brand: "H&M",
    description:
      "Lightweight and playful, these shorts are perfect for beach days and chill weekends.",
    gallery: [
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376492/n6_kcnful.jpg",
        name: "Striped Casual Shorts",
        brand: "H&M",
        price: 450.0,
        description:
          "Lightweight and playful, these shorts are perfect for beach days and chill weekends.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376444/n5_ylut6z.jpg",
        name: "Denim Long Sleeve Shirt",
        brand: "Zara",
        price: 899.0,
        description:
          "Edgy meets casual. This denim shirt is a layering staple that never goes out of style.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376333/n4_j0sfs2.jpg",
        name: "Printed Short Sleeve Shirt",
        brand: "Puma",
        price: 600.0,
        description:
          "Bold prints for bold days. Lightweight and stylish, this shirt brings fun to everyday fashion.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376296/n3_sg38wa.jpg",
        name: "Classic White Shirt (women)",
        brand: "Nike",
        price: 399.0,
        description:
          "A wardrobe essential – the classic white shirt. Crisp, clean, and endlessly versatile. Dress it up or down.",
      },
    ],
  },
  {
    id: "67f920a52c502a46a4ce0d1a",
    image:
      "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376644/n7_ts6fvm.jpg",
    name: "Beige Utility Shirt",
    price: 699.0,
    brand: "Gucci",
    description:
      "Functional fashion. Utility pockets and neutral tones make this a statement piece with purpose.",
    gallery: [
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376644/n7_ts6fvm.jpg",
        name: "Beige Utility Shirt",
        brand: "Gucci",
        price: 699.0,
        description:
          "Functional fashion. Utility pockets and neutral tones make this a statement piece with purpose.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376492/n6_kcnful.jpg",
        name: "Striped Casual Shorts",
        brand: "H&M",
        price: 450.0,
        description:
          "Lightweight and playful, these shorts are perfect for beach days and chill weekends.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376444/n5_ylut6z.jpg",
        name: "Denim Long Sleeve Shirt",
        brand: "Zara",
        price: 899.0,
        description:
          "Edgy meets casual. This denim shirt is a layering staple that never goes out of style.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376333/n4_j0sfs2.jpg",
        name: "Printed Short Sleeve Shirt",
        brand: "Puma",
        price: 600.0,
        description:
          "Bold prints for bold days. Lightweight and stylish, this shirt brings fun to everyday fashion.",
      },
    ],
  },
  {
    id: "67f920a52c502a46a4ce0d1b",
    image:
      "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376703/n8_xewvly.jpg",
    name: "Black Mandarin Collar Shirt",
    price: 499.0,
    brand: "Balenciaga",
    description:
      "Modern elegance in black. The mandarin collar brings an upscale touch to your casual rotation.",
    gallery: [
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376703/n8_xewvly.jpg",
        name: "Black Mandarin Collar Shirt",
        brand: "Balenciaga",
        price: 499.0,
        description:
          "Modern elegance in black. The mandarin collar brings an upscale touch to your casual rotation.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376644/n7_ts6fvm.jpg",
        name: "Beige Utility Shirt",
        brand: "Gucci",
        price: 699.0,
        description:
          "Functional fashion. Utility pockets and neutral tones make this a statement piece with purpose.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376492/n6_kcnful.jpg",
        name: "Striped Casual Shorts",
        brand: "H&M",
        price: 450.0,
        description:
          "Lightweight and playful, these shorts are perfect for beach days and chill weekends.",
      },
      {
        image:
          "https://res.cloudinary.com/demqwkfpy/image/upload/v1744376444/n5_ylut6z.jpg",
        name: "Denim Long Sleeve Shirt",
        brand: "Zara",
        price: 899.0,
        description:
          "Edgy meets casual. This denim shirt is a layering staple that never goes out of style.",
      },
    ],
  },
];

const user = JSON.parse(localStorage.getItem("user")); // Or useContext(AuthContext) if using context
const userId = user?._id; // actual MongoDB ObjectId

const Product2 = () => {
  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post("https://cara-backend-hryb.onrender.com/cart/add", {
        userId,
        productId,
        quantity: 1,
      });

      if (response.status === 200) {
        toast.success("Item added to cart!");
      }
    } catch (error) {
      toast.error("Failed to add to cart.");
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <section id="product1" className="section-p1">
      <h2>New Arrivals</h2>
      <p>Summer Collection New Modern Designs</p>
      <div className="pro-container">
        {products.map((product) => (
          <div className="pro" key={product.id}>
            <Link
              to={`/sproduct/${product.id}`}
              state={{ ...product, productId: product.id, userId }}
            >
              <img src={product.image} alt={product.name} />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>₹{product.price}</h4>
              </div>
            </Link>
            <i
              className="fa-solid fa-cart-shopping cart"
              onClick={() => handleAddToCart(product.id)}
            ></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product2;
