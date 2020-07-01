import React from "react";
import {LoginForm} from "./LoginForm";
import {SignUpForm} from "./SignUpForm";

const FORMS = {
	login: LoginForm,
	signUp: SignUpForm
}

class Home extends React.Component {
	state = { currentForm: "signUp" };


  navigateTo = (form) => {
    this.setState({ currentForm: form });
  };

  render() {

	  const { navigateTo } = this.props;
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
	    		<Form navigateTo={navigateTo} />
	    	</section>
	    </>
	  );
  }
  
};

export {Home};