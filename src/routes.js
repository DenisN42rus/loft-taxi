import React from 'react';
import {HomeWithAuth} from './Home';
import {Map} from './Map';
import {ProfileWithAuth} from './Profile';
import {SignUpForm} from './SignUpForm';
import {LoginForm} from './LoginForm';
import {Route} from 'react-router-dom';

export const routes = [
	{
		path: '/Home',
		component: HomeWithAuth,
		routes: [
			{
				name: 'LoginForm',
				path: '/Home/LoginForm',
				component: LoginForm
			},
			{
				name: 'SignUpForm',
				path: '/Home/SignUpForm',
				component: SignUpForm
			}
		]
	},
	{
		path: '/Map',
		component: Map
	},
	{
		path: '/Profile',
		component: ProfileWithAuth
	}
]

export const RouteWithSubRoutes = (route) => (
	<Route path={route.path} render={(props) => (
		<route.component {...props} routes={route.routes} />
	)}/>
)

// https://habr.com/ru/post/358124/