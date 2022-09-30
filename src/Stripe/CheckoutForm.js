import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from 'sweetalert2'
import alert from 'sweetalert2-react-content'

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  // const [messageSuccess, setMessageSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: 500,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          // setMessageSuccess(true);
          const MySwal = alert(Swal);
          MySwal.fire({
            title: <strong>Thank you for your purchase!</strong>,
            confirmButtonText: 'You will get a confirmation email shortly.',
            icon: 'success'
          })
          document.getElementById('showPayment').style.display = 'none';
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
        // setMessageSuccess(false);
        const MySwal = alert(Swal);
        MySwal.fire({
          title: <strong>Your payment was declined.</strong>,
          cancelButtonText: 'Please make sure you enter valid card number, CVV number, expiration date and zip-code.',
          icon: 'error'
        })
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form className='payment' id='showPayment' onSubmit={handleSubmit} style={{display: 'none'}}>
      <CardElement />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button style={{padding: '0.75em 1.25em'}}>Pay</button>
      </div>
    </form>
  );
};