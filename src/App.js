import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Login from './Login';
import Logout from './Logout';
import MyAccount from './MyAccount';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <h1 className='center'>LOADING...</h1>
  return (
    <div>
      <div className='app'>
        <Login/>
        <Logout/>
      </div>
      <div className='center'>
        <MyAccount/>
      </div>
    </div>
  );
}

export default App;
