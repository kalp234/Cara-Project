import React from 'react';
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Terms = () => {
  return (
    <div className="page-content">
      <h1>Terms and Conditions</h1>
      <ol className="legal-list">
      <li> By accessing this website, you agree to be bound by these terms and all applicable laws.</li>
      <li> All content on this website is the property of Cara and may not be copied or used without permission.</li>
      <li> Product images are for representation only; actual product may vary slightly.</li>
      <li> Prices are subject to change without prior notice.</li>
      <li> We reserve the right to cancel any order due to pricing or stock errors.</li>
      <li> Returns and refunds are governed by our Cancellation and Refund Policy.</li>
      <li> You must not use our site for any illegal or unauthorized purpose.</li>
      <li> We reserve the right to modify these terms at any time without notice.</li>
      </ol>
      <button
      onClick={() => (window.location.href = '/')}
      style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#088178',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
       <i className="fa-solid fa-arrow-left " style={{ marginRight: '5px',fontSize: '14px' }}></i>
      Go Back
    </button>
    </div>
  );
};

export default Terms;
