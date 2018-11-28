import React from 'react';
import { Route, HashRouter, Link, Redirect, Switch } from 'react-router-dom';
// import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Splash from './splash/splash';
import IndexContainer from './images/index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginContainer from './session/login_container';
import UserShowContainer from './users/show_container';
import Modal from '../components/modal/modal';
import UpdateUser from '../components/users/update';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <ProtectedRoute exact path="/index" component={IndexContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute exact path="/account/edit" component={UpdateUser} />
      <Route exact path="/" component={Splash} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
