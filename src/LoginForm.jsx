import React from 'react';
import {PropTypes} from "prop-types";

export class LoginForm extends React.Component {
	state = {
		email: "",
		password: ""
	};

  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func,
    navigate: PropTypes.func.isRequired
  }

	handleSubmit = event => {
    event.preventDefault();
    
    this.props.logIn(this.state.email, this.state.password)
    setTimeout(() => {
      this.props.navigate("map")
    }, 0)
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render () {
  	const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
