import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from "prop-types";
import {sendCard, getCard} from './cardActions';
import {Formik, Field} from 'formik';
import { 
  Paper, 
  Grid, 
  Typography, 
  FormControl,
  InputLabel,
  Button,
  TextField,
  FormHelperText,
  Box
} from '@material-ui/core';
import styles from './profile.module.css';
import InputMask from 'react-input-mask';

export function Profile(props) {
	const card = {
		cardNumber: props.cardNumber, 
  	expiryDate: props.expiryDate, 
  	cardName: props.cardName, 
  	cvc: props.cvc
	}

	let isValidCardName = false;
	let isValidCvc = false;

	useEffect(() => {
		props.getCard(props.token);
	}, [])

	const myInput = props => {
    return <TextField {...props} name={props.field.name}/>
  }

  const InputCardNumber = (props) => (
	  <InputMask mask="9999 9999 9999 9999" maskChar=' ' value={props.value} onChange={props.onChange}>
	    {(inputProps) => {
	    	return <TextField {...props} type="text" name={props.field.name}/>
	    }}
	  </InputMask>
	);

	const InputExpiryDate = (props) => (
	  <InputMask mask="99/99" maskChar=' ' alwaysShowMask="true" value={props.value} onChange={props.onChange}>
	    {(inputProps) => {
	    	return <TextField {...props} type="text" name={props.field.name}/>
	    }}
	  </InputMask>
	);

	const validateCardNumber = value => {
		if((value).trim().length < 19) {
  		return "В номере карты 16 цифр";
  	}
	}

	const validateExpiryDate = value => {
		if((value).trim().length < 5) {
  		return "Заполните это поле";
  	}
	}

	const validateCvc = value => {
		if(value.length < 3) {
  		return "Заполните это поле";
  	}
	}

	return (
		<Grid container alignItems="center" justify="center">
	    <Grid item>
	      <Paper className={styles.formContainer}>
	      	 <Typography align="center" variant="h4">
	      	 	Профиль
	      	 </Typography>
	      	 <Typography align="center" className="offsetBottom">
	      	 	Способ оплаты
	      	 </Typography>
	      	 <Formik 
						onSubmit={value => {
							props.sendCard(value.cardNumber, value.expiryDate, value.cardName, value.cvc, props.token)
						}}
					  initialValues={{
					  	cardNumber: card.cardNumber, 
					  	expiryDate: card.expiryDate, 
					  	cardName: card.cardName, 
					  	cvc: card.cvc
					  }}
					  >{(props) => {
					    return (
			      	 <form data-testid="form" onSubmit={props.handleSubmit}>
			        	 	<Grid container alignItems="center" justify="center">
			        	 		<Grid item xs={12}>
			        	 			<Grid container spacing={4} alignItems="center" justify="center">
				          	 		<Grid item xs={6}>
				          	 			<Paper elevation={3} className={styles.card}>
					          	 			<Box className={styles.container}>
					          	 				<FormControl fullWidth error={props.errors.cardNumber}>
					          	 				  <InputLabel htmlFor="my-input" shrink>Номер карты</InputLabel>
					          	 				   <Field
												          fullWidth 
												          name="cardNumber"
												          value={props.values.cardNumber}
												          placeholder="0000 0000 0000 0000"
												          required
												          className={styles.input}
												          onChange={props.handleChange}
												          component={InputCardNumber}
												          validate={validateCardNumber}
												        />
					          	 				  <FormHelperText error>{props.errors.cardNumber}</FormHelperText>
					          	 				</FormControl>
					          	 				<FormControl fullWidth error={props.errors.expiryDate}>
					          	 				  <InputLabel htmlFor="my-input" shrink>Срок действия</InputLabel>
					          	 				  <Field 
					          	 				  	fullWidth 
					          	 				  	name="expiryDate" 
					          	 				  	value={props.values.expiryDate}
					          	 				  	required
					          	 				  	className={styles.input}
					          	 				  	onChange={props.handleChange}
					          	 				  	component={InputExpiryDate}
					          	 				  	validate={validateExpiryDate}
					          	 				  />
					          	 				  <FormHelperText error>{props.errors.expiryDate}</FormHelperText>
					          	 				</FormControl>
					          	 			</Box>
				          	 			</Paper>
					          	 	</Grid>
					          	 	<Grid item xs={6}>
				          	 			<Paper elevation={3} className={styles.card}>
					          	 			<Box className={styles.container}>
					          	 				<FormControl fullWidth>
					          	 				  <InputLabel htmlFor="my-input" shrink>Имя владельца</InputLabel>
					          	 				  <Field 
					          	 				  	fullWidth 
					          	 				  	name="cardName" 
					          	 				  	placeholder="USER NAME"
					          	 				  	value={props.values.cardName}
					          	 				  	required
					          	 				  	className={styles.input}
					          	 				  	onChange={props.handleChange}
					          	 				  	component={myInput}
					          	 				  />
					          	 				</FormControl>
					          	 				<FormControl fullWidth error={props.errors.cvc}>
					          	 				  <InputLabel htmlFor="my-input" shrink>CVC</InputLabel>
					          	 				  <Field 
					          	 				  	fullWidth 
					          	 				  	name="cvc" 
					          	 				  	value={props.values.cvc}
					          	 				  	placeholder="cvc"
					          	 				  	required
					          	 				  	className={styles.input}
					          	 				  	onChange={props.handleChange}
					          	 				  	component={myInput}
					          	 				  	validate={validateCvc}
					          	 				  />
					          	 				  <FormHelperText error>{props.errors.cvc}</FormHelperText>
					          	 				</FormControl>
					          	 			</Box>
				          	 			</Paper>
					          	 	</Grid>
				          	 	</Grid>
			          	 	</Grid>
			        	 	</Grid>
				        	<Grid container justify="center">
				        		<Button 
				        		  variant="contained" 
				        		  color="primary"
				        		  data-testid="submit"
				        		  type="submit"
				        		  className={styles.button}
				        		>
				        		  Сохранить
				        		</Button>
			        	 </Grid>
			      	 </form>
					    )
					  }}
					</Formik>
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
		cvc: state.card.cvc,
		token: state.auth.token
	}),
	{sendCard, getCard}
)(Profile);
