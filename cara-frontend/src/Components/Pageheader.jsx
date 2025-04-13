import React from 'react'
import "../App.css"

const Pageheader = ({ title, description, className }) => {
    return (
        <div>
      <section className={'page-header ' + className}>
        <h2>{title}</h2>
        <p>{description}</p>
      </section>
      </div>
    );
  };
  
export default Pageheader