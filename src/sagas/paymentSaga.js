import {takeEvery, call, put} from 'redux-saga/effects';
import {sendCard, getCard, addCard} from '../actions/cardActions';
import {serverAddCard, serverGetCard} from '../api';

export function* sendCardSaga(action) {
	const result = yield call(serverAddCard, action.payload);
	if(result) {
		localStorage.hasCard = true;
		yield put(addCard(action.payload))
	}
}

export function* getCardSaga(action) {
	const result = yield call(serverGetCard, action.payload);
	if(result) {
		localStorage.hasCard = true;
		yield put(addCard(result))
	}
}

export function* paymentSaga() {
	yield takeEvery(sendCard, sendCardSaga);
	yield takeEvery(getCard, getCardSaga);
}