import React from 'react'
import "../App.css"
const Newsletter = () => {
  function myFunction() {
    alert("Email Submitted Succesfully");
  }
  function refreshPage() {
    window.location.reload();
  }
  return (
    
        <section id="newsletter" className="section-p1 section-m1">
      <div className="text">
        <h4>Sign Up For Newsletters</h4>
        <p>
          Get E-Mail Updates about our latest shop and 
          <span> Special Offers</span>
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your Email Address" required />
        <button className="normal" onClick={() => { myFunction(); refreshPage(); }} id="email">Sign Up</button>
      </div>
     
    </section>
  
  )
}

export default Newsletter