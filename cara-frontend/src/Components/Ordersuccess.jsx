import React from "react";
import { useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const location = useLocation();
  const {
    paymentId,
    name,
    address,
    city,
    pincode,
    phone,
    amount,
  } = location.state || {};

  return (
    <div className="flex bg-[#e3e6f3] items-center justify-center min-h-screen text-center">
      <div className="bg-white md:w-full w-[22rem] max-w-md border-2 rounded-md border-gray-400 p-6 shadow-md mt-2">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Order Confirmed!
        </h1>
        <p className="text-lg mb-2">Thank you for shopping with Cara. </p>

        {paymentId && (
          <p className="text-sm text-gray-700 mb-4">
            Payment ID: <span className="font-mono">{paymentId}</span>
          </p>
        )}

        <div className="text-left text-sm text-gray-800 bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2 text-base">Shipping Details:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>City:</strong> {city}</p>
          <p><strong>Pincode:</strong> {pincode}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p className="mt-2"><strong>Total Paid:</strong> ₹{amount?.toFixed(2)}</p>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-4 py-2 bg-[#088178] text-white rounded hover:bg-[#066e6c] transition"
        >
          <i className="fa-solid fa-arrow-left mr-2 text-sm"></i>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
