import React from 'react';
import {withAuth} from '../AuthContext';
import {PropTypes} from "prop-types";
import { 
  Paper, 
  Grid, 
  Typography, 
  FormControl,
  InputLabel,
  Button,
  InputBase,
  Box
} from '@material-ui/core';

export function Profile(props) {

	const paperStyle = {
		width: "752px",
		height: "457px",
		padding: "44px 60px",
    marginTop: "48px",
    marginBottom: "48px",
	}
	const inputBaseStyle = {
		marginTop: "16px"
	}
	const textStyle = {
		marginBottom: "40px"
	}
	const cardStyle = {
    width: "300px",
    height: "189px",
    position: "relative",
    paddingTop: "16px",
    paddingLeft: "32px",
    paddingRight: "32px",
    paddingBottom: "16px"
	}
	const buttonStyle = {
		marginTop: "24px",
    marginLeft: "8px"
	}
	const boxStyle = {
		height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
	}
	return (
		<Grid container={true} alignItems="center" justify="center">
      <Grid item>
        <Paper className="formContainer" style={paperStyle}>
        	 <Typography align="center" variant="h4">
        	 	Профиль
        	 </Typography>
        	 <Typography align="center" style={textStyle}>
        	 	Способ оплаты
        	 </Typography>
        	 <form data-testid="form">
          	 	<Grid container alignItems="center" justify="center">
          	 		<Grid item xs={12}>
          	 			<Grid container spacing={4} alignItems="center" justify="center">
		          	 		<Grid item xs={6}>
		          	 			<Paper elevation={3} style={cardStyle}>
			          	 			<Box style={boxStyle}>
			          	 				<FormControl fullWidth>
			          	 				  <InputLabel htmlFor="my-input" required shrink>Номер карты</InputLabel>
			          	 				  <InputBase 
			          	 				  	fullWidth 
			          	 				  	name="cardNumber" 
			          	 				  	placeholder="0000 0000 0000 0000"
			          	 				  	required
			          	 				  	style={inputBaseStyle}
			          	 				  />
			          	 				</FormControl>
			          	 				<FormControl fullWidth>
			          	 				  <InputLabel htmlFor="my-input" required shrink>Срок действия</InputLabel>
			          	 				  <InputBase 
			          	 				  	fullWidth 
			          	 				  	name="cardNumber" 
			          	 				  	value="07/20"
			          	 				  	required
			          	 				  	readOnly
			          	 				  	style={inputBaseStyle}
			          	 				  />
			          	 				</FormControl>
			          	 			</Box>
		          	 			</Paper>
			          	 	</Grid>
			          	 	<Grid item xs={6}>
		          	 			<Paper elevation={3} style={cardStyle}>
			          	 			<Box style={boxStyle}>
			          	 				<FormControl fullWidth>
			          	 				  <InputLabel htmlFor="my-input" required shrink>Имя владельца</InputLabel>
			          	 				  <InputBase 
			          	 				  	fullWidth 
			          	 				  	name="cardName" 
			          	 				  	placeholder="USER NAME"
			          	 				  	required
			          	 				  	style={inputBaseStyle}
			          	 				  />
			          	 				</FormControl>
			          	 				<FormControl fullWidth>
			          	 				  <InputLabel htmlFor="my-input" required shrink>CVC</InputLabel>
			          	 				  <InputBase 
			          	 				  	fullWidth 
			          	 				  	name="cvc" 
			          	 				  	placeholder="CVC"
			          	 				  	required
			          	 				  	style={inputBaseStyle}
			          	 				  />
			          	 				</FormControl>
			          	 			</Box>
		          	 			</Paper>
			          	 	</Grid>
		          	 	</Grid>
	          	 	</Grid>
          	 	</Grid>
        	 </form>
        	 <Grid container justify="center">
        	 	<Button 
        	 	  variant="contained" 
        	 	  color="primary"
        	 	  data-testid="submit"
        	 	  type="submit"
        	 	  style={buttonStyle}
        	 	>
        	 	  Сохранить
        	 	</Button>
        	 </Grid>
        </Paper>
      </Grid>
    </Grid>
	)
}

Profile.propTypes = {
	isLoggedIn: PropTypes.bool,
	logIn: PropTypes.func,
	logOut: PropTypes.func.isRequired,
	navigate: PropTypes.func.isRequired
}

export const ProfileWithAuth = withAuth(Profile);
