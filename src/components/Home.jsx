import React from "react";
import {LoginForm} from "./LoginForm";
import {SignUpForm} from "./SignUpForm";
import {withAuth} from '../AuthContext';
import {PropTypes} from "prop-types";

const FORMS = {
	login: LoginForm,
	signUp: SignUpForm
}

export class Home extends React.Component {
	state = { currentForm: "login" };

	static propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
    logOut: PropTypes.func,
    navigate: PropTypes.func.isRequired
  }

  navigateTo = (form) => {
    this.setState({ currentForm: form });
  };

	render() {
		const { currentForm } = this.state;
    const Form = FORMS[currentForm];

		return (
			<>
				<Form {...this.props} navigate={this.props.navigate} navigateToForm={this.navigateTo}/>
			</>
		)
	}
}

export const HomeWithAuth = withAuth(Home);
