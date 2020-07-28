import {call, all} from 'redux-saga/effects';
import {authSaga} from '../components/App';
import {registrationSaga} from '../components/SignUp';
import {paymentSaga} from '../components/Profile';
import {routeSaga} from '../components/Map';

export function* rootSaga() {
	yield all([
		call(authSaga),
		call(registrationSaga),
		call(routeSaga),
		call(paymentSaga)
	])

}