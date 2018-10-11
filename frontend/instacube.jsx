import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util'
// above for testing session api

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;

  ReactDOM.render(
    <RootReducer />,
    root
  );
});
