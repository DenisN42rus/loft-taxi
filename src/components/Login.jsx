import React, {useEffect} from 'react';
import {PropTypes} from "prop-types";
import {Link} from 'react-router-dom';
import {Form} from './Form';
import {Paper, Grid, Typography} from '@material-ui/core';

export function Login(props) {
	
  useEffect(() => {
    if(props.isLoggedIn) props.history.replace("Map");
  }, [props.isLoggedIn, props.history]);

  return (
    <Grid container={true} alignItems="center" justify="center" className="grid">
      <Grid item xs={3}>
        <Paper className="formContainer">
            <Grid container>
              <Grid item xs={12}>
                <Typography className="offsetBottom" align="left" variant="h4">
                  Войти
                </Typography>
                <Typography align="left">
                  Новый пользователь? 
                  
                <Link to="/SignUpForm">Зарегистрируйтесь</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Form 
                  authenticate={props.authenticate}
                />
              </Grid>
            </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

Login.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    authenticate: PropTypes.func.isRequired
  }
