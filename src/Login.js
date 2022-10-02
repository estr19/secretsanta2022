import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 profile">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="/main_pic.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="364" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Welcome to Bookdemic Secret Santa - 2022!</h1>
            <p className="lead">It's an annual tradition for Bookdemic club members to exchange gifts around Christmas time. To keep things interesting, we sign up and draw a random person to give the present.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button onClick={() => loginWithRedirect()} title='Log In to my account' type="button" className="btn btn-primary btn-lg px-4 me-md-2 button">Log In&nbsp;&nbsp;<span className="material-symbols-outlined">login</span></button>
            <a href="https://bookdemic.glitch.me/" target="_blank" rel="noreferrer" class="nav-link px-3 text-dark">
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn more about Bookdemic</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
  );
}

export default Login;