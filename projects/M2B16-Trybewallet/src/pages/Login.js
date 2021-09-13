import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../actions';
import './Login.css';

const emailRegex = /\S+@\S+\.\S+/;
const passwordMinLength = 6;

const initialLoginState = {
  email: '',
  password: '',
};

const handleChange = (setLogin, { type, value }) => {
  setLogin((state) => ({ ...state, [type]: value }));
};

function Login() {
  const loginStatus = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const [{ email, password }, setLogin] = useState(initialLoginState);
  const btnStatus = !(emailRegex.test(email) && password.length >= passwordMinLength);

  if (loginStatus) return <Redirect to="/carteira" />;

  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="login-heading">This is a login</h3>
        <input
          data-testid="email-input"
          className="login-email"
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ ({ target }) => handleChange(setLogin, target) }
        />
        <input
          data-testid="password-input"
          className="login-password"
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ ({ target }) => handleChange(setLogin, target) }
        />
        <button
          className="login-btn"
          type="button"
          disabled={ btnStatus }
          onClick={ () => dispatch(registerUser(email)) }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
