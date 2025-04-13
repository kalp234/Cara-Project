import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Pagination1 = () => {
  return (
    <section id="pagination" className="section-p1">
      <a href="#">1</a>
      <Link to="/blog2">2</Link>
      <Link to="/blog2">
        <i className="fa-solid fa-arrow-right-long"></i>{" "}
      </Link>
    </section>
  );
};

export default Pagination1;
