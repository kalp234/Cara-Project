import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Smbanner = () => {
  return (
    <section id="sm-banner" className="section-p1">
      <div className="banner-box">
        <h4>Crazy Deals</h4>
        <h2>buy 1 get 1 free</h2>
        <span>The best classNameic dress are on sale at CARA</span>
        <Link to={"/shop"}>
          <button className="white">Learn More</button>
        </Link>
      </div>
      <div className="banner-box b2">
        <h4>Spring/Summer</h4>
        <h2>Upcoming Season</h2>
        <span>The best classNameic dress are on sale at CARA</span>
        <Link to={"/shop"}>
          <button className="white">Collection</button>
        </Link>
      </div>
    </section>
  );
};

export default Smbanner;
