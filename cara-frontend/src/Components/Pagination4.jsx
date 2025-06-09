import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Pagination1 = () => {
  return (
    <section id="pagination" className="section-p1">
      <Link to="/shop">1</Link>

      <Link to="/shop2">2</Link>
    </section>
  );
};

export default Pagination1;
