import {addCard} from "./cardActions";

export const initialState = {
	cardNumber: "", 
	expiryDate: "", 
	cardName: "", 
	cvc: "",
	hasCard: false
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
