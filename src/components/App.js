import React from 'react';
import {ProfileWithAuth} from './Profile';
import {HomeWithAuth} from './Home';
import {MapWithConnect} from './Map';
import {connect} from 'react-redux';
import {HeaderWithConnect} from "./Header";
import {Redirect} from 'react-router-dom';
import {PrivateRoute} from '../PrivateRoute';

export function App(props) {
  return (
    <>
      <Redirect from="/" to="/Map" />
      <HomeWithAuth {...props} />
      <PrivateRoute component={HeaderWithConnect} />
      <PrivateRoute exac path="/Map" component={MapWithConnect} />
      <PrivateRoute exac path="/Profile" component={ProfileWithAuth} />
    </>
  )
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
