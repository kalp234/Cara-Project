import React from 'react';
import '../App.css';
import v from "../img/about/1.mp4";

const Aboutapp = () => {
  return (
    <section id="about-app" className="section-p1">
      <h1>Download our <a href="#"><span className='bold'>App</span>, Coming Soon....</a></h1>
      <div className="video">
        <video autoPlay muted loop playsInline>
          <source src={v} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Aboutapp;
