import React from "react";
import "../App.css";
import Pageheader from "../Components/Pageheader";

import Product3 from "../Components/Product3";
import Pagination4 from "../Components/Pagination4";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Shop = () => {
  return (
    <div>
      <Pageheader
        title="#stayhome"
        description="Save more with coupons & upto 70% off"
        className={"page-header"}
      />
      <Product3 />
      <Pagination4 />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Shop;
