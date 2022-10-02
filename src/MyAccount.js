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
  }

  return(
    isAuthenticated && (
    <div className='profile p-4'>
      <br></br>
      <div className="container">
        <div className="lg-4">
          <img className="bd-placeholder-img rounded-circle" src={user.picture} alt={user.name} />
          <h2 className="fw-normal">Hello, {user.given_name} {user.family_name}!</h2>
          <p><b>Email:</b> {user.email}</p>
          <div id="cartTotal">
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Entry fee</h6>
                </div>
                <span className="text-muted">$4</span>
              </li><li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Card processing fee</h6>
                </div>
                <span className="text-muted">$1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$5</strong>
              </li>
            </ul>
          </div>
          <button className="btn btn-success btn-lg mt-3" id='purchaseNow' onClick={() => showPayment()}>Purchase Now</button>
          <StripeContainer />
        </div>
      </div>
    </div>
  ))
}

export default MyAccount;