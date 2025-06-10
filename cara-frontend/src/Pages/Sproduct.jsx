import React from 'react';
import { useParams } from 'react-router-dom';
import Prodetails from '../Components/Prodetails';
import Product1 from '../Components/Product1';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import f1 from "../img/products/f1.jpg";
import f2 from "../img/products/f2.jpg";
import f3 from "../img/products/f3.jpg";
import f4 from "../img/products/f4.jpg";

const productData = {
  1: { name: "Cartoon Astronaut T-Shirt", price: 78, image: f1, gallery: [f1, f2, f3, f4] },
  2: { name: "Cool Graphic T-Shirt", price: 85, image: f2, gallery: [f2, f1, f3, f4] },
  3: { name: "Urban Streetwear T-Shirt", price: 90, image: f3, gallery: [f3, f1, f2, f4] },
  4: { name: "Modern Minimalist T-Shirt", price: 95, image: f4, gallery: [f4, f1, f2, f3] },
};

const Sproduct = () => {
  const { id } = useParams();
  const product = productData[id] || productData[1]; 

  return (
    <div>
      <Prodetails name={product.name} price={product.price} image={product.image} gallery={product.gallery} />
      <Product1 />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Sproduct;
