import {createAction} from 'redux-actions';

export const register = createAction(
	"REGISTER",
	(email, password, name, surname) => ({email, password, name, surname})
);