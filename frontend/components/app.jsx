import React from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
// import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Splash from './splash/splash';
import IndexContainer from './images/index';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginContainer from './session/login_container';
import UserShowContainer from './users/show_container';
import Modal from '../components/modal/modal';

const App = () => (
  <div>
    <Modal />
    <h1>This is being rendered from app.jsx</h1>
    <AuthRoute path="/signup" component={SignupContainer} />
    <Route path="/index" component={IndexContainer} />
    <Route exact path="/login" component={LoginContainer} />
    <Route path="/users/:userId" component={UserShowContainer} />
    <Route exact path="/" component={Splash} />
  </div>
);

export default App;
