import React from "react";
import "../App.css";
import b7 from "../img/blog/b7.jpg";
import b8 from "../img/blog/b8.webp";
import b9 from "../img/blog/b9.webp";
import b10 from "../img/blog/b10.webp";
import b11 from "../img/blog/b11.webp";
import b13 from "../img/blog/b13.webp";

const Blog = () => {
  return (
    <section id="blog">
      <div className="blog-box">
        <div className="blog-img">
          <img src={b7} alt="" />
        </div>
        <div className="blog-details">
          <h4>Layering Essentials for a Cozy Season</h4>
          <p>
            Learn the secrets to stylish layering that keeps you warm without
            sacrificing fashion. Ideal for transitioning weather.
          </p>
          <a href="#">CONTINUE READING</a>
        </div>
        <h1>10/04</h1>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src={b8} alt="" />
        </div>
        <div className="blog-details">
          <h4>2025's Top Streetwear Brands to Watch</h4>
          <p>
            From bold graphics to relaxed fits, we’ve rounded up the streetwear
            labels that are making waves this year.
          </p>
          <a href="#">CONTINUE READING</a>
        </div>
        <h1>08/04</h1>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src={b9} alt="" />
        </div>
        <div className="blog-details">
          <h4>Statement Pieces That Elevate Your Look</h4>
          <p>
            Stand out from the crowd with bold fashion choices. Here's how one
            standout piece can transform your entire outfit.
          </p>
          <a href="#">CONTINUE READING</a>
        </div>
        <h1>06/04</h1>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src={b10} alt="" />
        </div>
        <div className="blog-details">
          <h4>Fashion Meets Tech: Smart Clothing Trends</h4>
          <p>
            From fitness tracking to heated jackets, wearable tech is becoming a
            fashion statement. Here's what’s new.
          </p>
          <a href="#">CONTINUE READING</a>
        </div>
        <h1>04/04</h1>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src={b11} alt="" />
        </div>
        <div className="blog-details">
          <h4>How to Choose the Right Fit for You</h4>
          <p>
            Whether it’s oversized or slim-fit, knowing your body type can help
            you choose the perfect style every time.
          </p>
          <a href="#">CONTINUE READING</a>
        </div>
        <h1>03/04</h1>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src={b13} alt="" />
        </div>
        <div className="blog-details">
          <h4>Monochrome Outfits That Make a Statement</h4>
          <p>
            Simplicity meets sophistication. Here's how to rock a one-color look
            while keeping it fresh and stylish.
          </p>
          <a href="#">CONTINUE READING</a>
        </div>
        <h1>01/04</h1>
      </div>
    </section>
  );
};

export default Blog;
