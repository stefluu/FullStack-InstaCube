import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import { signup, login, logout } from './util/session_api_util'
// above for testing session api

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  const store = configureStore();

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(
    <Root store={store} />,
    root
  );
});
