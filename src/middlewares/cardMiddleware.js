import {sendCard, getCard, addCard} from '../actions/cardActions';
import {serverAddCard, serverGetCard} from '../api';

export const cardMiddleware = (store) => (next) => async (action) => {
	if(action.type === sendCard.toString()) {
		const {cardNumber, expiryDate, cardName, cvc} = action.payload;
		const success= await serverAddCard(cardNumber, expiryDate, cardName, cvc);

		if(success) {
			localStorage.cardNumber = cardNumber;
			localStorage.expiryDate = expiryDate;
			localStorage.cardName = cardName;
			localStorage.cvc = cvc;
			store.dispatch(addCard(cardNumber, expiryDate, cardName, cvc))
		}
	} else {
		next(action)
	}
	if(action.type === getCard.toString()) {
		const success= await serverGetCard();
		if(success) {
			const {cardNumber, expiryDate, cardName, cvc} = localStorage;
			store.dispatch(addCard(cardNumber, expiryDate, cardName, cvc))
		}
	} else {
		next(action)
	}
}