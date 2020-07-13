import React, {useState} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from "prop-types";
import {sendCard} from '../actions/cardActions';
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
	const [state, setState] = useState({cardNumber: "", expiryDate: "", cardName: "", cvc: ""})

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

	const { cardNumber, expiryDate, cardName, cvc } = state;

	const handleClick = event => {
		event.preventDefault();
		
		props.sendCard(state.cardNumber, state.expiryDate, state.cardName, state.cvc)
	}
	const handleChange = event => {
    setState({...state, [event.target.name]: event.target.value });
  };
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
			          	 				  	value={cardNumber}
			          	 				  	placeholder="0000 0000 0000 0000"
			          	 				  	required
			          	 				  	style={inputBaseStyle}
			          	 				  	onChange={handleChange}
			          	 				  />
			          	 				</FormControl>
			          	 				<FormControl fullWidth>
			          	 				  <InputLabel htmlFor="my-input" required shrink>Срок действия</InputLabel>
			          	 				  <InputBase 
			          	 				  	fullWidth 
			          	 				  	name="expiryDate" 
			          	 				  	value={expiryDate}
			          	 				  	required
			          	 				  	style={inputBaseStyle}
			          	 				  	onChange={handleChange}
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
			          	 				  	value={cardName}
			          	 				  	required
			          	 				  	style={inputBaseStyle}
			          	 				  	onChange={handleChange}
			          	 				  />
			          	 				</FormControl>
			          	 				<FormControl fullWidth>
			          	 				  <InputLabel htmlFor="my-input" required shrink>CVC</InputLabel>
			          	 				  <InputBase 
			          	 				  	fullWidth 
			          	 				  	name="cvc" 
			          	 				  	value={cvc}
			          	 				  	placeholder="CVC"
			          	 				  	required
			          	 				  	style={inputBaseStyle}
			          	 				  	onChange={handleChange}
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
        	 	  onClick={handleClick}
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
	isLoggedIn: PropTypes.bool
}

export const ProfileWithAuth = connect(
	(state) => ({
		cardNumber: state.card.cardNumber,
		expiryDate: state.card.expiryDate,
		cardName: state.card.cardName,
		cvc: state.card.cvc
	}),
	{sendCard}
)(Profile);
