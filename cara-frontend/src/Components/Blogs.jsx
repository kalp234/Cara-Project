import React from "react";
import "../App.css";
import b1 from "../img/blog/b1.jpg";
import b2 from "../img/blog/b2.jpg";
import b3 from "../img/blog/b3.jpg";
import b4 from "../img/blog/b4.jpg";
import b5 from "../img/blog/b5.jpg";
import b6 from "../img/blog/b6.jpg";

const Blog = () => {
  return (
    <section id="blog">
      <div className="blog-box">
        <div className="blog-img border border-2">
          <img src={b1} alt="" />
        </div>
        <div className="blog-details">
          <h4>Inside the Style World of Blair Eadie</h4>
          <p>
            Blair Eadie of Atlantic-Pacific blends bold trends with timeless
            style, partnering with top brands and sharing fashion tips with her
            1.9M followers.
          </p>

          <a href="https://www.the-atlantic-pacific.com/">CONTINUE READING</a>
        </div>
        <h1>10/04</h1>
      </div>

      <div className="blog-box">
        <div className="blog-img border border-2">
          <img src={b2} alt="" />
        </div>
        <div className="blog-details">
          <h4>Style Without Age by Ashleigh Hutchinson</h4>
          <p>
            Ashleigh Hutchinson of The Daileigh empowers women of all ages to
            embrace personal style confidently, proving that fashion truly has
            no age limit.
          </p>

          <a href="https://thedaileigh.com/">CONTINUE READING</a>
        </div>
        <h1>08/04</h1>
      </div>

      <div className="blog-box">
        <div className="blog-img border border-2">
          <img src={b3} alt="" />
        </div>
        <div className="blog-details">
          <h4>The Comeback of Denim in Daily Wear</h4>
          <p>
            Denim is back and bolder than ever! Here's how to incorporate it
            into your everyday outfits with a modern twist.
          </p>
          <a href="https://thefashionguitar.com/">CONTINUE READING</a>
        </div>
        <h1>05/04</h1>
      </div>

      <div className="blog-box">
        <div className="blog-img border border-2">
          <img src={b4} alt="" />
        </div>
        <div className="blog-details">
          <h4>How to Layer Like a Pro This Season</h4>
          <p>
            Master the art of layering without sacrificing comfort or style.
            These tips will keep you warm and fashionable.
          </p>
          <a href="#">CONTINUE READING</a>
        </div>
        <h1>03/04</h1>
      </div>

      <div className="blog-box">
        <div className="blog-img border border-2">
          <img src={b5} alt="" />
        </div>
        <div className="blog-details">
          <h4>Sustainable Fashion: Brands to Watch</h4>
          <p>
            These eco-conscious brands are changing the fashion industry for the
            better. Check out our top picks for sustainable style.
          </p>
          <a href="#">CONTINUE READING</a>
        </div>
        <h1>02/04</h1>
      </div>

      <div className="blog-box">
        <div className="blog-img border border-2">
          <img src={b6} alt="" />
        </div>
        <div className="blog-details">
          <h4>Color Trends of the Year: What’s Hot?</h4>
          <p>
            From bold reds to earthy tones, we break down the color palettes
            taking over 2025 fashion and how you can wear them.
          </p>
          <a href="#">CONTINUE READING</a>
        </div>
        <h1>01/04</h1>
      </div>
    </section>
  );
};

export default Blog;
