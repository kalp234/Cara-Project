import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Pagination3 = () => {
  return (
    <section id="pagination" className="section-p1">
        <Link to="/blog">1</Link>
      <Link to="/blog2">2</Link>
     
    </section>
  );
};

export default Pagination3;
