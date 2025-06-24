import React, { useContext, useState } from "react";
import { CartContext } from "../api/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Cartadd = () => {
  const { total } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");

  const shippingCharge = couponApplied ? 0 : 50;
  const grandTotal = total + shippingCharge;

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!name || !address || !city || !pincode || !phone) {
      alert("Please fill in all address details before checkout.");
      return;
    }

    const options = {
      key: "rzp_test_z7oGYiesyg5x3b",
      amount: grandTotal * 100,
      currency: "INR",
      name: "Cara Fashion",
      description: "Purchase from Cara",
      image: "/logo.png",
      handler: function (response) {
        navigate("/order-success", {
          state: {
            paymentId: response.razorpay_payment_id,
            name,
            address,
            city,
            pincode,
            phone,
            amount: grandTotal,
          },
        });
      },
      prefill: {
        name,
        email: "example@gmail.com",
        contact: phone,
      },
      notes: {
        address: `${address}, ${city} - ${pincode}`,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === "FREEDEL") {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
    }
  };
  const isFormValid = name && address && city && pincode && phone;
  return (
    <section id="cart-add" className="section-p1 bg-[#e3e6f3]">
      <div id="coupon">
        <h3>Apply Coupon</h3>
        <div>
          <input
            type="text"
            placeholder="Enter Your Coupon"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className="normal p-1 p-2" onClick={handleApplyCoupon}>
            Apply
          </button>
        </div>
        <p className="text-sm mt-4 text-gray-600">
          Use code <strong>FREEDEL</strong> for free delivery on all orders.
        </p>
        {couponApplied && (
          <p className="text-green-600 font-semibold mt-1">
            Coupon Applied: FREEDEL - Free Delivery
          </p>
        )}
      </div>

      {/* Address Form */}
      <div className="flex flex-col mt-8">
  <h3 className="font-semibold mb-4 text-lg text-gray-800">Shipping Address</h3>
  <div className="bg-white shadow-md rounded-lg p-5 w-full md:w-[30rem] border border-gray-300">
    <div className="flex flex-col gap-4">
      <input
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <input
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  </div>
</div>



      <div id="subtotal" className="mt-10 md:mt-[-8rem]">
        <h3>Cart Total</h3>
        <table>
          <tbody>
            <tr>
              <td>Cart Subtotal</td>
              <td>₹{total.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>
                {!couponApplied ? (
                  <>₹50.00</>
                ) : (
                  <>
                    <span className="line-through text-gray-500 mr-2">
                      ₹50.00
                    </span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                {!couponApplied ? (
                  <strong>₹{(total + 50).toFixed(2)}</strong>
                ) : (
                  <>
                    <span className="line-through text-gray-500 mr-2">
                      ₹{(total + 50).toFixed(2)}
                    </span>
                    <strong className="text-green-600">
                      ₹{total.toFixed(2)}
                    </strong>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <button
  className={`normal p-2 mt-3 rounded transition duration-200 ${
    isFormValid
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
  onClick={() => {
    if (!isFormValid) {
      toast.error("Please fill in all address details before checkout.");

    } else {
      handleCheckout();
    }
  }}
>
  Proceed to Checkout
</button>


      </div>
      
     
     
    
    </section>
  );
};

export default Cartadd;
