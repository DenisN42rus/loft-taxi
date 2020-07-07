import React from "react";
import {LoginForm} from "./LoginForm";
import {SignUpForm} from "./SignUpForm";
import {withAuth} from './AuthContext';
import {PropTypes} from "prop-types";

const FORMS = {
	login: LoginForm,
	signUp: SignUpForm
}

export class Home extends React.Component {
	state = { currentForm: "signUp" };

	static propTypes = {
		isLoggedIn: PropTypes.bool.isRequired,
		logIn: PropTypes.func.isRequired,
		logOut: PropTypes.func.isRequired,
		navigate: PropTypes.func.isRequired
	}

	goToProfile = () => {
		this.props.navigate("profile")
	}

  navigateTo = (form) => {
    this.setState({ currentForm: form });
  };

  render() {

	  const { currentForm } = this.state;
    const Form = FORMS[currentForm];
	  return (
  		<>
				{this.props.isLoggedIn ? (
	  			<p>
	  				You are logged in
	  				<button onClick={this.goToProfile}>Go to profile</button>
	  			</p>
				) : (
  		<>
  			<ul>
					<li>
					  <button
					    onClick={() => {
					      this.navigateTo("login");
					    }}
					  >
					    LoginForm
					  </button>
					</li>
					<li>
					  <button
					    onClick={() => {
					      this.navigateTo("signUp");
					    }}
					  >
					    SignUpForm
					  </button>
					</li>
				</ul>
				<section>
					<Form {...this.props} />
				</section>
  		</>
 			 )}
  		</>
	  );
  }
  
};


export const HomeWithAuth = withAuth(Home)