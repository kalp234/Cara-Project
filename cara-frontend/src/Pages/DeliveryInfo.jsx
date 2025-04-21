import React from 'react';
import "../App.css";

const DeliveryInfo = () => {
  return (
    <div className="page-content">
      <h1>Delivery Information</h1>
      <ol className="legal-list">
    <li>All orders are processed within 1–2 business days.</li>
    <li>Delivery times may vary based on location and courier services.</li>
    <li>Standard delivery takes 3–7 working days for domestic orders.</li>
    <li>Delays may occur during high-volume periods or due to unforeseen circumstances.</li>
    <li>Once your order is shipped, you will receive a tracking number via email or SMS.</li>
    <li>We are not responsible for delays caused by courier services.</li>
    <li>Customers are required to provide accurate shipping information.</li>
    <li>If the package is returned due to incorrect address, re-shipping charges will apply.</li>
  </ol>
    </div>
  );
};

export default DeliveryInfo;
