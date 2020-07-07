import React from 'react'
import {withAuth} from './AuthContext';
import {PropTypes} from "prop-types";

export class Profile extends React.Component {
	static propTypes = {
		isLoggedIn: PropTypes.bool,
		logIn: PropTypes.func,
		logOut: PropTypes.func.isRequired,
		navigate: PropTypes.func.isRequired
	}

	unauthenticate = () => {
		
		this.props.logOut();
		this.props.navigate("home");
	}
	render() {
		return <p> Profile <button data-testid="logOut" onClick={this.unauthenticate}>Log out</button></p>
	}
}

export const ProfileWithAuth = withAuth(Profile)