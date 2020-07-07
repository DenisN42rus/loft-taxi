import React from 'react'
import {withAuth} from './AuthContext';
import {PropTypes} from "prop-types";

export function Profile(props) {
	const unauthenticate = () => {
		props.logOut();
		props.navigate("home");
	}

	return <p>Profile 
						<button 
						data-testid="logOut" 
						onClick={unauthenticate}
						>
						Log out
						</button>
					</p>
}

Profile.propTypes = {
		isLoggedIn: PropTypes.bool,
		logIn: PropTypes.func,
		logOut: PropTypes.func.isRequired,
		navigate: PropTypes.func.isRequired
	}

export const ProfileWithAuth = withAuth(Profile)