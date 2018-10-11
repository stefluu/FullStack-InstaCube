import React from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
// import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Splash from './splash/splash'
import IndexContainer from './images/index'

const App = () => (
  <div>
    <h1>This is being rendered from app.jsx</h1>
    <Route exact path="/" component={Splash} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/index" component={IndexContainer} />
  </div>
);

export default App;
