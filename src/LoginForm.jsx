import React, {useState} from 'react';
import {PropTypes} from "prop-types";

export function LoginForm(props) {
  const [initialState, setInitialState] = useState({email: "", password: ""});

	const handleSubmit = event => {
    event.preventDefault();
    
    props.logIn(initialState.email, initialState.password)
    setTimeout(() => {
      props.navigate("map")
    }, 0)
  };

  const handleChange = event => {
    setInitialState({...initialState, [event.target.name]: event.target.value });
  };

	const { email, password } = initialState;
  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          name="email"
          data-testid="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          data-testid="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <input data-testid="submit" type="submit" value="Submit" />
    </form>
  );
}

LoginForm.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func,
    navigate: PropTypes.func.isRequired
  }