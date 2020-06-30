import React from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const FORMS = {
	login: <LoginForm />,
	signUp: <SignUpForm />
}

class Home extends React.Component {
	state = { currentForm: "signUp" };

  navigateTo = (form) => {
    this.setState({ currentForm: form });
  };

  render() {
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
	    		{FORMS[this.state.currentForm]}
	    	</section>
	    </>
	  );
  }
  
};

export {Home};