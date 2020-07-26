import React from "react";
import {Login} from "./Login";
import {SignUpForm} from "./SignUpForm";
import {connect} from 'react-redux';
import {PropTypes} from "prop-types";
import {Route, Switch, withRouter} from 'react-router-dom';
import {authenticate} from '../actions/authActions';
import {register} from '../actions/registerAction';
import {getCard} from '../actions/cardActions';

export function Home(props) {
	return (
		<>
			<Switch>
				<Route path='/LoginForm' render={() => (
	          <Login {...props}/>
	        )}/>
				<Route path='/SignUpForm' render={() => (
	          <SignUpForm {...props}/>
	        )}/>
			</Switch>
		</>
	)
}

Home.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    authenticate: PropTypes.func.isRequired
  }

export const HomeWithAuth = withRouter(connect(
	(state) => ({isLoggedIn: state.auth.isLoggedIn, token: state.auth.token}),
	{authenticate, register, getCard}
)(Home));
