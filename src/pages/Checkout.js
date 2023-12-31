// Checkout.js

import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/Slices/cartSlice";

const Checkout = ({ totalAmount }) => {
  const dispatch = useDispatch();

  const handleToken = (token) => {
    // Here you can send the token to your backend to process the payment
    // and handle the success/cancel logic.
    console.log(token);

    // Clear the cart after successful payment
    dispatch(clearCart());
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51OTKY8SBqLM2lXWeIRVj2nTXe5RQlHKJaZpVuzUmfvzqhWPLmQjLSZErap6YVqCeMcpd3DGgnSx3j7rHzGYLQRtg00Q2jsBczV"
      token={handleToken}
      amount={totalAmount * 100} // Convert amount to cents
      name="Your Store Name"
      description="Purchase from Your Store"
      currency="USD"
    >
      <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
        Checkout Now
      </button>
    </StripeCheckout>
  );
};

export default Checkout;
