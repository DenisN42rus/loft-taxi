import {takeEvery, call, put} from 'redux-saga/effects';
import {logIn} from '../actions/authActions';
import {register} from '../actions/registerAction';
import {serverRegister} from '../api';

export function* registerSaga(action) {
	const {email, password, name, surname} = action.payload;
	const result = yield call(serverRegister, email, password, name, surname)
	if(result) {
		localStorage.isLoggedIn = true;
		yield put(logIn())
	}
}

export function* registrationSaga() {
	yield takeEvery(register, registerSaga);
}