import {createAction} from 'redux-actions';

export const addCard = createAction(
	"ADD_CARD",
	(cardNumber, expiryDate, cardName, cvc) => ({cardNumber, expiryDate, cardName, cvc})
);

export const sendCard = createAction(
	"SEND_CARD",
	(cardNumber, expiryDate, cardName, cvc) => ({cardNumber, expiryDate, cardName, cvc})
);