import React, { useContext, useState } from 'react';

import { StoreContext } from '../contex store/StoreProvider';

const LoginComponent = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser, isLogged, setIsLogged } = useContext(StoreContext)

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case "login":
        setLogin(e.target.value);
        break;
      case "password": 
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  }

  return ( 
    <>
      <div className="login-component">
        <form onSubmit={handleSubmit}>

          <label>
            login
            <input name="login" type="text" placeholder="login" value={login} onChange={handleChange} />
          </label>
          <label>
            password
            <input name="password" type="password" placeholder="password" value={password} onChange={handleChange} />
          </label>

          <button type="submit" className="btn btn-primary" > log in</button>

        </form>

      </div>
    </>
  );
}
 
export default LoginComponent;