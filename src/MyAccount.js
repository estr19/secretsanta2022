import StripeContainer from "./Stripe/StripeContainer";
import { useAuth0 } from "@auth0/auth0-react";

const MyAccount = () => {
  const { user, isAuthenticated } = useAuth0();

  const showPayment = () => {
    const x = document.getElementById('showPayment');
    const y = document.getElementById('purchaseNow');
      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
      }
      // else {
      //   x.style.display = "none";
      // }
  }
  return(
    isAuthenticated && (
    <div style={{width: 'max-content'}} className='profile center'>
      <br></br>
      <img src={user.picture} alt={user.name} />
      <h2>Hello, {user.given_name} {user.family_name}!</h2>
      <p><b>Your email:</b> {user.email}</p>
      <p>Secret Santa participation fee: <b>$5.00</b></p>
      <button id='purchaseNow' onClick={() => showPayment()}>Purchase Now</button>
      <StripeContainer />
    </div>
  ))
}

export default MyAccount;