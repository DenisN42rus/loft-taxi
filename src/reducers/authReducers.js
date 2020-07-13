import {logIn, logOut} from "../actions/authActions";

let key = localStorage.getItem('isLoggedIn');

if(key === "false") key = false

export const initialState = {
	isLoggedIn: key
}

export default function (state = initialState, action) {
	switch (action.type) {
		case logIn.toString(): {
			return {isLoggedIn: true}
		}
		case logOut.toString(): {
			return {isLoggedIn: false}
		}
		default:
			return state;
	}
}
