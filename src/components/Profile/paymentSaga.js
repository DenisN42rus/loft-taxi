import {takeEvery, call, put} from 'redux-saga/effects';
import {sendCard, getCard, addCard} from './cardActions';
import {serverAddCard, serverGetCard} from '../../utils/api';

export function* sendCardSaga(action) {
	const result = yield call(serverAddCard, action.payload);
	if(result) {
		action.payload.hasCard = true;
		yield put(addCard(action.payload));
	}
}

export function* getCardSaga(action) {
	const result = yield call(serverGetCard, action.payload);
	if(result && !(result.success === false)) {
		result.hasCard = true;
		yield put(addCard(result));
	} else {
		yield put(addCard({
			cardNumber: "", 
			expiryDate: "", 
			cardName: "", 
			cvc: "",
			hasCard: false
		}));
	}
}

export function* paymentSaga() {
	yield takeEvery(sendCard, sendCardSaga);
	yield takeEvery(getCard, getCardSaga);
}