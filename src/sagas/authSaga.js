import {takeEvery, call, put} from 'redux-saga/effects';
import {authenticate, logIn} from '../actions/authActions';
import {serverLogin} from '../api';

export function* authSaga() {
	yield takeEvery(authenticate, function*(action) {
		const {email, password} = action.payload;
		const result = yield call(serverLogin, email, password)
		if(result) {
			localStorage.isLoggedIn = true;
			yield put(logIn())
		}
	})
}