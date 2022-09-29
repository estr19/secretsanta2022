import { useAuth0 } from "@auth0/auth0-react";

const MyAccount = () => {
  const { user, isAuthenticated } = useAuth0();
  return(
    isAuthenticated && (
    <div style={{width: 'max-content'}} className='profile center'>
      <br></br>
      <img src={user.picture} alt={user.name} />
      <h2>Hello, {user.given_name} {user.family_name}!</h2>
      <p><b>Your email:</b> {user.email}</p>
    </div>
  ))
}

export default MyAccount;