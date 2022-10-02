import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <div>
      <div className='main'>
        <button onClick={() => logout({ returnTo: window.location.origin })} title='Sign out of my account' type="button" className="btn btn-danger btn-lg px-4 me-md-2 button">
          Sign Out&nbsp;&nbsp;<span className="material-symbols-outlined">logout</span>
        </button>
      </div>
    </div>
  ));
}

export default Login;