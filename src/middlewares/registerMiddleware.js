import {logIn} from '../actions/authActions';
import {register} from '../actions/registerAction';
import {serverRegister} from '../api';

export const registerMiddleware = (store) => (next) => async (action) => {
	if(action.type === register.toString()) {
		const {email, password, name, surname} = action.payload;
		const success = await serverRegister(email, password, name, surname)
		if(success) {
			store.dispatch(logIn())
		}
	} else {
		next(action)
	}
}