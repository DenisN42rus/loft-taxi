import React, {useState} from "react";
import {LoginForm} from "./LoginForm";
import {SignUpForm} from "./SignUpForm";
import {withAuth} from './AuthContext';
import {PropTypes} from "prop-types";

const FORMS = {
	login: LoginForm,
	signUp: SignUpForm
}

export function Home(props) {
	const [currentForm, setCurrentForm] = useState("signUp");

	const goToProfile = () => {
		props.navigate("profile")
	}

  const navigateTo = (form) => {
    setCurrentForm(form);
  };

  const Form = FORMS[currentForm];
	  
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
				<li>
				  <button
				    onClick={() => {
				      navigateTo("login");
				    }}
				  >
				    LoginForm
				  </button>
				</li>
				<li>
				  <button
				    onClick={() => {
				      navigateTo("signUp");
				    }}
				  >
				    SignUpForm
				  </button>
				</li>
			</ul>
			<section>
				<Form {...props} />
			</section>
		</>
			 )}
		</>
  );
};

Home.propTypes = {
			isLoggedIn: PropTypes.bool.isRequired,
			logIn: PropTypes.func.isRequired,
			logOut: PropTypes.func.isRequired,
			navigate: PropTypes.func.isRequired
		}

export const HomeWithAuth = withAuth(Home)