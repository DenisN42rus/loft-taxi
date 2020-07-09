import React, {useState} from 'react';
import {PropTypes} from "prop-types";
import { 
  Paper, 
  Grid, 
  Typography, 
  FormControl,
  InputLabel,
  Input,
  Button
} from '@material-ui/core';

export function LoginForm(props) {
	const [state, setState] = useState({email: "", password: ""})

	const handleSubmit = event => {
    event.preventDefault();
    
    props.logIn(state.email, state.password)
    setTimeout(() => {
      props.navigate("map")
    }, 0)
  };

  const handleChange = event => {
    setState({...state, [event.target.name]: event.target.value });
  };

	const { email, password } = state;
  const gridStye = {
    minHeight: '100vh'
  }
  const marginBottom = {
    marginBottom: '30px'
  }
  const buttonStyle = {
    border: "none",
    background: "#fff",
    borderRadius: "5px",
    outline: "none",
    color: "#1473e6"
  }
  return (
    <Grid container={true} alignItems="center" justify="center" style={gridStye}>
      <Grid item xs={3}>
        <Paper className="formContainer">
    <form data-testid="form" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Typography style={marginBottom} align="left" variant="h4">
            Войти
          </Typography>
          <Typography align="left">
            Новый пользователь? 
            <button
              style={buttonStyle}
              onClick={() => {
                props.navigateToForm("signUp");
              }}
            >
              Зарегистрируйтесь
          </button>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Имя пользователя</InputLabel>
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

LoginForm.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func,
    navigate: PropTypes.func.isRequired
  }
