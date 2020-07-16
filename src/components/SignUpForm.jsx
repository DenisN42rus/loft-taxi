import React, {useState} from 'react';
import {PropTypes} from "prop-types";
import {Link} from 'react-router-dom';
import { 
  Paper, 
  Grid, 
  Typography, 
  FormControl,
  InputLabel,
  Input,
  Button
} from '@material-ui/core';

export function SignUpForm(props) {
  
  const [state, setState] = useState({
    email: "",
    name: "",
    lastName: "",
    password: ""
  })

	const handleSubmit = event => {
    event.preventDefault();
    
    props.register(state.email, state.password, state.name, state.lastName)
    setTimeout(() => {
      props.history.replace("Map")
    }, 1000)
  };

  const handleChange = event => {
    setState({...state, [event.target.name]: event.target.value });
  };

	const { email, name, lastName, password } = state;
  const gridStye = {
    minHeight: '100vh'
  }
  const marginBottom = {
    marginBottom: '30px'
  }
  return (
    <Grid container={true} alignItems="center" justify="center" style={gridStye}>
      <Grid item xs={3}>
        <Paper className="formContainer">
    <form data-testid="form" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Typography style={marginBottom} align="left" variant="h4">
            Регистрация
          </Typography>
          <Typography align="left">
            Уже зарегистрированы?  
          <Link to="/LoginForm">Войти</Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Адрес электронной почты</InputLabel>
            <Input 
              id="my-input" 
              aria-describedby="my-helper-text" 
              name="email"
              data-testid="email"
              value={email}
              style={marginBottom}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Имя</InputLabel>
            <Input 
              id="my-input" 
              aria-describedby="my-helper-text" 
              name="name"
              data-testid="name"
              value={name}
              style={marginBottom}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Фамилия</InputLabel>
            <Input 
              id="my-input" 
              aria-describedby="my-helper-text" 
              name="lastName"
              data-testid="lastName"
              value={lastName}
              style={marginBottom}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Пароль</InputLabel>
            <Input 
              id="my-input" 
              aria-describedby="my-helper-text" 
              name="password"
              data-testid="password"
              value={password}
              style={marginBottom}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} align="right">
          <Button 
            variant="contained" 
            color="primary"
            data-testid="submit"
            type="submit"
          >
            Войти
          </Button>
        </Grid>
      </Grid>
    </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

SignUpForm.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    register: PropTypes.func.isRequired
  }
