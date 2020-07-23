import React, {useEffect} from 'react';
import {PropTypes} from "prop-types";
import {Link} from 'react-router-dom';
import {Form} from './Form';
import { 
  Paper, 
  Grid, 
  Typography
} from '@material-ui/core';

export function SignUpForm(props) {
  
  useEffect(() => {
    if(props.isLoggedIn) props.history.replace("Map");
  }, [props.isLoggedIn, props.history])
  
  return (
    <Grid container={true} alignItems="center" justify="center" className="grid">
      <Grid item xs={3}>
        <Paper className="formContainer">
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
                <Form 
                  register={props.register} component="signUp"
                />
              </Grid>
            </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

SignUpForm.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    register: PropTypes.func.isRequired
  }
