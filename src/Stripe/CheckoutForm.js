import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from 'sweetalert2'
import alert from 'sweetalert2-react-content'

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

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
          // console.log("CheckoutForm.js 25 | payment successful!");
          // <div class="modal modal-tour position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalTour">
          //   <div class="modal-dialog" role="document">
          //     <div class="modal-content rounded-4 shadow">
          //       <div class="modal-body p-5">
          //         <h2 class="fw-bold mb-0">Thank you for your purchase!</h2>
          //         <button type="button" class="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">You will get a confirmation email shortly.</button>
          //       </div>
          //     </div>
          //   </div>
          // </div>
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
        const MySwal = alert(Swal);
        MySwal.fire({
          icon: 'error',
          title: <strong>Your payment was declined.</strong>,
          text: 'Please make sure you enter valid card number, CVV number, expiration date and zip-code.',
        })
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form className="mt-4" id='showPayment' onSubmit={handleSubmit} style={{display: 'none'}}>
      <CardElement />
      <div className="container">
        <button onClick={() => document.getElementById('cartTotal').style.display = "none"} className="btn btn-success btn-lg px-4 mt-4">Place Your Order</button>
      </div>
    </form>
  );
};