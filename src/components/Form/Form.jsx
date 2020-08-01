import React from 'react';
import {Formik, Field} from 'formik';
import {connect} from 'react-redux';
import {authenticate} from '../App/authActions';
import {register} from '../SignUp';
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

  const component = props.component;

	return (
		<Formik 
			onSubmit={value => {
				if(component) {
					props.register(value.email, value.password, value.Name, value.lastName)
				} else {
					props.authenticate(value.email, value.password)
				}
			}}
		  initialValues={{email: "", password: "", Name: "", lastName: ""}}
		  >{(props) => {
		    return (
			    <form className="form" data-testid="form" onSubmit={props.handleSubmit}>
		    		<Grid container spacing={2}>
			      	<Grid item xs={12}>
			      		<FormControl fullWidth>
			      			<InputLabel htmlFor="email">Имя пользователя</InputLabel>
			      			<Field
			      				id="email" 
			      				aria-describedby="my-helper-text" 
			      				name="email"
			      				type="email"
			      				data-testid="email"
			      				placeholder="Имя пользователя"
			      				value={props.values.name}
			      				className="offsetBottom"
			      				onChange={props.handleChange}
			      				component={myInput}/>
			      		</FormControl>
			      	</Grid>
			      	{component ? (
			      			<>
			      			<Grid item xs={6}>
			      				<FormControl fullWidth>
			      					<InputLabel htmlFor="name">Имя</InputLabel>
			      					<Field
			      						id="name" 
			      						aria-describedby="my-helper-text" 
			      						name="Name"
			      						type="text"
			      						data-testid="name"
			      						value={props.values.name}
			      						className="offsetBottom"
			      						onChange={props.handleChange}
			      						component={myInput}/>
			      				</FormControl>
			      			</Grid>
			      			<Grid item xs={6}>
			      				<FormControl fullWidth>
			      					<InputLabel htmlFor="lastName">Фамилия</InputLabel>
			      					<Field
			      						id="lastName" 
			      						aria-describedby="my-helper-text" 
			      						name="lastName"
			      						type="text"
			      						data-testid="lastName"
			      						value={props.values.name}
			      						className="offsetBottom"
			      						onChange={props.handleChange}
			      						component={myInput}/>
			      				</FormControl>
			      			</Grid>
			      			</>
			      		) : (
									<></>
			      		)
			      	}
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
		    )
		  }}
		</Formik>
	)
}

export const FormWithConnect = connect(
  null,
  {register, authenticate}
)(Form);