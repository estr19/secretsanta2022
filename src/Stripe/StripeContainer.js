import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LnAsnBHVPxX3rpBOToqyh7tRzmJREX7Im45oArowFX27b7WXnoDJr31q8KRXHDNNtNmJgCX1JtULLotVKhsws3Q00KjVpVboX";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;