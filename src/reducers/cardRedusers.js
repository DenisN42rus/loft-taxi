import {addCard} from "../actions/cardActions";

export const initialState = {
	cardNumber: "", 
	expiryDate: "", 
	cardName: "", 
	cvc: ""
}

export default function (state = initialState, action) {
	switch (action.type) {
		case addCard.toString(): {
			return Object.assign({}, state, action.payload)
		}
		default:
			return state;
	}
}
