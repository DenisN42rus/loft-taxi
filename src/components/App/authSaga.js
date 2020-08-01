import {takeEvery, call, put} from 'redux-saga/effects';
import {authenticate, logIn} from './authActions';
import {serverLogin} from '../../utils/api';

export function* authenticateSaga(action) {
	const result = yield call(serverLogin, action.payload);
	if(result.success) {
		localStorage.isLoggedIn = true;
		yield put(logIn(result))
	}
}

export function* authSaga() {
	yield takeEvery(authenticate, authenticateSaga);
}