import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <div>
      <div className='main'>
        <button onClick={() => logout({ returnTo: window.location.origin })}>Sign Out&nbsp;&nbsp;<span className="material-symbols-outlined">logout</span></button>
      </div>
    </div>
  ));
}

export default Login;