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
  let preloadedState = {}
  const user = window.currentUser;
  if (window.currentUser){
    preloadedState = {
      entities: {
        users: user,
      },
      session: {
        currentUserId: Object.values(user)[0].id
      }
    };
  };

  delete window.currentUser;
  //so window doesn't hold extra info bc we already stored it.
  
  const store = configureStore(preloadedState);

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(
    <Root store={store} />,
    root
  );
});
