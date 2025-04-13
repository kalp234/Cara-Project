import React from "react";
import Hero from "./Components/Hero.jsx";
import Feature from "./Components/Feature.jsx";
import Product1 from "./Components/Product1.jsx";
import Product2 from "./Components/Product2.jsx";
import Banner from "./Components/Banner.jsx";
import Smbanner from "./Components/Smbanner.jsx";
import Banner3 from "./Components/Banner3.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Footer from "./Components/Footer.jsx";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Product1 />
      <Banner />
      <Product2 />
      <Smbanner />
      <Banner3 />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
