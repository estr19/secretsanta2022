import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div>
        <div className='main'>
          <button onClick={() => loginWithRedirect()} title='Log In to my account'>Log In&nbsp;&nbsp;<span className="material-symbols-outlined">login</span></button>
        </div>
        <div className='center profile'>
          <h1>Welcome to Bookdemic Secret Santa - 2022!</h1>
          <h3>It's an annual tradition for Bookdemic club members to exchange gifts around Christmas time. To keep things interesting, we sign up and draw a random person to give the present.</h3>
        </div>
      </div>
    )
  );
}

export default Login;