import React from "react";
import {LoginForm} from "./LoginForm";
import {SignUpForm} from "./SignUpForm";
import {withAuth} from '../AuthContext';
import {PropTypes} from "prop-types";
import {Route, Switch} from 'react-router-dom';

export function Home(props) {
	return (
		<>
			<Switch>
				<Route path='/LoginForm' render={() => (
	          <LoginForm {...props}/>
	        )}/>
				<Route path='/SignUpForm' render={() => (
	          <SignUpForm {...props}/>
	        )}/>
			</Switch>
		</>
	)
}

Home.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
    logOut: PropTypes.func
  }

export const HomeWithAuth = withAuth(Home);
