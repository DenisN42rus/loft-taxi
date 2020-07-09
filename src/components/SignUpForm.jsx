import React from 'react';
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
      <form data-testid="form" onSubmit={this.handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <Typography style={marginBottom} align="left" variant="h4">
              Регистрация
            </Typography>
            <Typography align="left">
              Уже зарегистрированы?  
              <button
                style={buttonStyle}
                onClick={() => {
                  this.props.navigateToForm("login");
                }}
              >
                Войти
            </button>
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
}
