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
			    <Form {...this.props} navigate={this.props.navigate}/>
			  </section>
			</>
		)
	}
}

export const HomeWithAuth = withAuth(Home);
