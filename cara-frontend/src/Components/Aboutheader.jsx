import React from "react";
import "../App.css";
import a6 from "../img/about/a6.jpg";

const Aboutheader = () => {
  return (
    <section id="about-head" className="section-p1">
      <img src={a6} alt=""></img>
      <div>
        <h2>WHO WE ARE?</h2>
        <p>
          At Cara, we are passionate about bringing you the latest trends in
          fashion with a focus on quality, comfort, and sustainability. Founded
          with a vision to make fashion accessible and enjoyable, we curate a
          wide range of stylish apparel and accessories to suit every
          personality and occasion. Our team is dedicated to creating a seamless
          shopping experience, blending aesthetics with functionality. Whether
          you're updating your wardrobe or searching for that perfect outfit,
          Cara is here to help you express yourself with confidence and flair.
        </p>
        <abbr title="You can either browse casually or use advanced filters to find exactly what you need.">
          Enjoy a seamless shopping experience with the flexibility to explore
          freely or search with precision.
        </abbr>

        <br></br>
        <br></br>

        <marquee bgcolor="#d5dbdb" loop="-1" scrollamount="5" width="100%">
          ✨ New Arrivals Just Dropped! Explore the latest styles and elevate
          your wardrobe today! 🛍️
        </marquee>
      </div>
    </section>
  );
};

export default Aboutheader;
