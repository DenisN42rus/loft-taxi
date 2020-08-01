import React from 'react';
import {ProfileWithAuth} from '../Profile';
import {MapWithConnect} from '../Map';
import {connect} from 'react-redux';
import {HeaderWithConnect} from "../Header";
import {Redirect, Route} from 'react-router-dom';
import {PrivateRoute} from '../../utils/PrivateRoute';
import {LoginWithConnect} from "../Login";
import {SignUpWithConnect} from "../SignUp";

export function App(props) {
  return (
    <>
      <Redirect from="/" to="/Map" />
      <Route path="/LoginForm" component={LoginWithConnect} />
      <Route path="/SignUpForm" component={SignUpWithConnect} />
      <PrivateRoute component={HeaderWithConnect} />
      <PrivateRoute path="/Map" component={MapWithConnect} />
      <PrivateRoute path="/Profile" component={ProfileWithAuth} />
    </>
  )
}

export const AppWithConnect = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
