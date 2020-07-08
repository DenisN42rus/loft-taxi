import React from "react";
import {withAuth} from './AuthContext';
import {PropTypes} from "prop-types";
import {SignUpForm} from './SignUpForm';
import {LoginForm} from './LoginForm';
import {Link, Route, Switch} from 'react-router-dom';
import {routes, RouteWithSubRoutes} from "./routes";

export function Home(props) {

	console.log(props)

	const goToProfile = () => {
		props.navigate("profile")
	}
	  
  return (
		<>
			{props.isLoggedIn ? (
  			<p>
  				You are logged in
  				<button 
	  				onClick={goToProfile}
	  				>
	  				Go to profile
  				</button>
  			</p>
			) : (
		<>
			<ul>
				<li><Link to="/Home/LoginForm">LoginForm</Link></li>
        <li><Link to="/Home/SignUpForm">SignUpForm</Link></li>
			</ul>
			<div>

			 </div>
		</>
			 )}
		</>
  );
};

Home.propTypes = {
			isLoggedIn: PropTypes.bool.isRequired,
			logIn: PropTypes.func.isRequired,
			logOut: PropTypes.func.isRequired
		}

export const HomeWithAuth = withAuth(Home)