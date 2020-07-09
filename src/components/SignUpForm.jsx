import React from 'react';
import {PropTypes} from "prop-types";

export class SignUpForm extends React.Component {
	state = {
		email: "",
		name: "",
		lastName: "",
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
    
    this.props.navigate('map');
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render () {
  	const { email, name, lastName, password } = this.state;
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
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          LastName:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
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
