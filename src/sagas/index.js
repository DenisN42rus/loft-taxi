import {call, all} from 'redux-saga/effects';
import {authSaga} from './authSaga';
import {registrationSaga} from './registrationSaga';
import {paymentSaga} from './paymentSaga';
import {routeSaga} from './routeSaga';

export function* rootSaga() {
	yield all([
		call(authSaga),
		call(registrationSaga),
		call(routeSaga),
		call(paymentSaga)
	])

}