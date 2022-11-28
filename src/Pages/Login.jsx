import React from "react";
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../Redux/AuthReducer/action';

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate('');
  const location = useLocation();

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  console.log('location', location);

  const goto = location?.state?.from?.pathname || '/';

  const formsubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((res) => {
        console.log('r:', res);
        if (res.type === 'LOGIN_SUCCESS') {
          navigate(goto);
        }
      });
    }
  }
  return (
    <div data-testid="login">
      <h2>LOGIN</h2>
      <form onSubmit={formsubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" 
          type="email"
           value={email}
           onChange={(e) => setemail(e.target.value)}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" 
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
