import {takeEvery, call, put} from 'redux-saga/effects';
import {logIn} from '../actions/authActions';
import {register} from '../actions/registerAction';
import {serverRegister} from '../api';

export function* registerSaga(action) {
	const result = yield call(serverRegister, action.payload)
	if(result.success) {
		localStorage.isLoggedIn = true;
		yield put(logIn(result))
	}
}

export function* registrationSaga() {
	yield takeEvery(register, registerSaga);
}