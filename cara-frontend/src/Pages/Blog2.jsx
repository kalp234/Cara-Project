import React from "react";
import Pageheader from "../Components/Pageheader";
import Blogs2 from "../Components/Blogs2";
import Newsletter from "../Components/Newsletter";
import Pagination3 from "../Components/Pagination3";
import Footer from "../Components/Footer";
import "../App.css";

const Blog2 = () => {
  return (
    <div>
      <Pageheader
        title="#readmore"
        description="Read all case studies about our products!"
        className="blog-header"
      />
      <Blogs2 />
      <Pagination3 />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog2;
