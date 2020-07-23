import React from 'react';
import {Formik, Field} from 'formik';
import { 
  Grid, 
  FormControl,
  InputLabel,
  Input,
  Button
} from '@material-ui/core';

export function Form(props) {

	const myInput = props => {
    return <Input {...props} name={props.field.name}/>
  }

	return (
		<Formik 
			onSubmit={value => {
				props.authenticate(value.email, value.password)
			}}
		  initialValues={{email: "", password: ""}}
		  >{(props) => {
		    return (
		      <form data-testid="form" onSubmit={props.handleSubmit}>
		      	<Grid item xs={12}>
		      		<FormControl fullWidth>
		      			<InputLabel htmlFor="email">Имя пользователя</InputLabel>
		      			<Field
		      				id="email" 
		      				aria-describedby="my-helper-text" 
		      				name="email"
		      				type="email"
		      				data-testid="email"
		      				value={props.values.name}
		      				className="offsetBottom"
		      				onChange={props.handleChange}
		      				component={myInput}/>
		      		</FormControl>
		      	</Grid>
		      	<Grid item xs={12}>
		      		<FormControl fullWidth>
		      			<InputLabel htmlFor="password">Пароль</InputLabel>
		      			<Field
		      				id="password" 
		      				aria-describedby="my-helper-text" 
		      				name="password"
		      				type="password"
		      				data-testid="password"
		      				value={props.values.name}
		      				className="offsetBottom"
		      				onChange={props.handleChange}
		      				component={myInput}/>
		      		</FormControl>
		      	</Grid>
		      	<Grid item xs={12}>
		      		<Button 
		      		  variant="contained" 
		      		  color="primary"
		      		  data-testid="submit"
		      		  type="submit"
		      		>
		      		  Войти
		      		</Button>
		      	</Grid>
		      </form>
		    )
		  }}
		</Formik>
	)
}