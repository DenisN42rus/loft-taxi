import {sendCard, addCard} from '../actions/cardActions';
import {serverAddCard} from '../api';

export const cardMiddleware = (store) => (next) => async (action) => {
	if(action.type === sendCard.toString()) {
		const {cardNumber, expiryDate, cardName, cvc} = action.payload;
		const success= await serverAddCard(cardNumber, expiryDate, cardName, cvc);

		if(success) {
			store.dispatch(addCard(cardNumber, expiryDate, cardName, cvc))
		}
	} else {
		next(action)
	}
}