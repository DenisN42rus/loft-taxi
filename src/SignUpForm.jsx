import React, {useState} from 'react';
import {PropTypes} from "prop-types";

export function SignUpForm(props) {
  const [state, setState] = useState(
    {
      email: "", 
      name: "",
      lastName: "",
      password: ""
    });

	const handleSubmit = event => {
    event.preventDefault();
    
    props.navigate('map');
  };

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

	const { email, name, lastName, password } = state;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        LastName:
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <input data-testid="submit" type="submit" value="Submit" />
    </form>
  );
}

SignUpForm.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func,
  navigate: PropTypes.func.isRequired
}