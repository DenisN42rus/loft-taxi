import {createAction} from 'redux-actions';

export const addCard = createAction(
	"ADD_CARD",
	({cardNumber, expiryDate, cardName, cvc, token}) => ({cardNumber, expiryDate, cardName, cvc, token})
);

export const sendCard = createAction(
	"SEND_CARD",
	(cardNumber, expiryDate, cardName, cvc, token) => ({cardNumber, expiryDate, cardName, cvc, token})
);

export const getCard = createAction("GET_CARD");