import {createAction} from 'redux-actions';

export const logIn = createAction(
	"LOG_IN",
	({success, token}) => ({success, token})
);
export const logOut = createAction("LOG_OUT");
export const authenticate = createAction(
	"AUTHENTICATE",
	(email, password) => ({email, password})
);
