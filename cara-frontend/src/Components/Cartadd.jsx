import React, { useContext, useState } from "react";
import { CartContext } from "../api/CartContext"; // Assuming CartContext provides total

const Cartadd = () => {
  const { total } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const shippingCharge = couponApplied ? 0 : 50;
  const grandTotal = total + shippingCharge;

  const handleCheckout = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: grandTotal * 100, // amount in paise
      currency: "INR",
      name: "Cara Fashion",
      description: "Purchase from Cara",
      image: "/logo.png",
      handler: function (response) {
        alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Kalp Shah",
        email: "example@gmail.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      }
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

  return (
    <section id="cart-add" className="section-p1">
      <div id="coupon">
        <h3>Apply Coupon</h3>
        <div>
          <input
            type="text"
            placeholder="Enter Your Coupon"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className="normal" onClick={handleApplyCoupon}>Apply</button>
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

      <div id="subtotal">
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
                    <span className="line-through text-gray-500 mr-2">₹50.00</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </>
                )}
              </td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td>
                {!couponApplied ? (
                  <strong>₹{(total + 50).toFixed(2)}</strong>
                ) : (
                  <>
                    <span className="line-through text-gray-500 mr-2">
                      ₹{(total + 50).toFixed(2)}
                    </span>
                    <strong className="text-green-600">₹{total.toFixed(2)}</strong>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <button className="normal mt-3" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default Cartadd;
