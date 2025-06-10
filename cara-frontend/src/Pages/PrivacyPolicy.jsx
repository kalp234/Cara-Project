import React from 'react';
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const PrivacyPolicy = () => {
  return (
    <div className="page-content">
      <h1>Privacy Policy</h1>
      <ol className="legal-list">
      <li> We collect personal data such as name, email, address, and contact number during account registration or checkout.</li>
      <li> Your data is used solely for order processing, shipping, and customer support.</li>
      <li> We do not share, sell, or rent your personal information to third parties.</li>
      <li> Payment information is encrypted and securely processed by our trusted payment gateways.</li>
      <li> We use cookies to enhance user experience and analyze website traffic.</li>
      <li> You can opt-out of marketing communications at any time.</li>
      <li> We follow industry-standard security practices to protect your information.</li>
      <li>By using our website, you agree to the terms outlined in this privacy policy.</li>
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

export default PrivacyPolicy;
