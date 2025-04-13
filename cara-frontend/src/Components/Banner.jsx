import React from "react";
import {Link} from "react-router-dom";

const Banner = () => {
  return (
    <section id="banner" class="section-m1">
      <h4>Repair Services</h4>
      <h2>
        Up to <span>70% Off</span> - All T-Shirts & Accessories
      </h2>
      <Link to="/shop">
  <button className="normal">Explore More</button>
</Link>
    </section>
  );
};

export default Banner;
