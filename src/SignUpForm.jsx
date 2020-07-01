import React from 'react';

export class SignUpForm extends React.Component {
	state = {
		email: "",
		name: "",
		lastName: "",
		password: ""
	};

	handleSubmit = event => {
    event.preventDefault();

    const { navigateTo } = this.props;
    navigateTo('map');
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
