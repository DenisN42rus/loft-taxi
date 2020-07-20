import React, {useState, useEffect} from 'react';
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
  };

  useEffect(() => {
    if(props.isLoggedIn) props.history.replace("Map");
  }, [props.isLoggedIn, props.history])

  const handleChange = event => {
    setState({...state, [event.target.name]: event.target.value });
  };

	const { email, name, lastName, password } = state;
  
  return (
    <Grid container={true} alignItems="center" justify="center" className="grid">
      <Grid item xs={3}>
        <Paper className="formContainer">
    <form data-testid="form" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className="offsetBottom" align="left" variant="h4">
            Регистрация
          </Typography>
          <Typography align="left">
            Уже зарегистрированы?  
          <Link to="/LoginForm">Войти</Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="email">Адрес электронной почты</InputLabel>
            <Input 
              id="email" 
              aria-describedby="my-helper-text" 
              name="email"
              type="email"
              data-testid="email"
              value={email}
              className="offsetBottom"
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="name">Имя</InputLabel>
            <Input 
              id="name" 
              aria-describedby="my-helper-text" 
              name="name"
              data-testid="name"
              value={name}
              className="offsetBottom"
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="lastName">Фамилия</InputLabel>
            <Input 
              id="lastName" 
              aria-describedby="my-helper-text" 
              name="lastName"
              data-testid="lastName"
              value={lastName}
              className="offsetBottom"
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input 
              id="password" 
              aria-describedby="my-helper-text" 
              name="password"
              type="password"
              data-testid="password"
              value={password}
              className="offsetBottom"
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
