import React, {useState} from "react";
import {LoginForm} from "./LoginForm";
import {SignUpForm} from "./SignUpForm";
import {withAuth} from '../AuthContext';
import {PropTypes} from "prop-types";

const FORMS = {
	login: LoginForm,
	signUp: SignUpForm
}

export function Home(props) {
	const [state, setState] = useState({currentForm: "login"})
	

  const navigateTo = (form) => {
    setState({ currentForm: form });
  };

	const { currentForm } = state;
  const Form = FORMS[currentForm];

	return (
		<>
			<Form {...props} navigate={props.navigate} navigateToForm={navigateTo}/>
		</>
	)
}

Home.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
    logOut: PropTypes.func,
    navigate: PropTypes.func.isRequired
  }

export const HomeWithAuth = withAuth(Home);
