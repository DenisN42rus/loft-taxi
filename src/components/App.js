import React from 'react';
import {ProfileWithAuth} from './Profile';
import {HomeWithAuth} from './Home';
import {Map} from './Map';
import {connect} from 'react-redux';
import Header from "./Header";
import {Route, Redirect} from 'react-router-dom';

export function App(props) {
  return (
    <>
      {props.isLoggedIn ? (
        <>
          <Route render={(history) => (
            <Header {...props} {...history}/>
          )}/>
          <Route exac path="/Map" component={Map} />
          <Route exac path="/Profile" component={ProfileWithAuth} />
        </>
      ) : (
      <>
        <Redirect from="/" to="/LoginForm" />
        <Route path='/LoginForm' render={(props) => (
          <HomeWithAuth {...props}/>
        )}/>
      </>
      )}
    </>
  )
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
