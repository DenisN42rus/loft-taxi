import {logIn, authenticate} from '../actions/authActions';
import {serverLogin} from '../api';

export const authMiddleware = (store) => (next) => async (action) => {
	if(action.type === authenticate.toString()) {
		const {email, password} = action.payload;
		const success= await serverLogin(email, password)
		if(success) {
			localStorage.isLoggedIn = true;
			store.dispatch(logIn())
		}
	} else {
		next(action)
	}
}