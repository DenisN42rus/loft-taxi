import {takeEvery, call, put} from 'redux-saga/effects';
import {getAddresses, addAddresses, getRoute, addRoute} from './routeActions';
import {serverGetRoute, serverGetAddresses} from '../../utils/api';

export function* getAddressesSaga(action) {
	const result = yield call(serverGetAddresses);
	if(result) {
		yield put(addAddresses(result.addresses))
	}
}

export function* getRouteSaga(action) {
		const result = yield call(serverGetRoute, action.payload);
		if(result) {
			yield put(addRoute(result))
		}
}

export function* routeSaga() {
	yield takeEvery(getAddresses, getAddressesSaga)
	yield takeEvery(getRoute, getRouteSaga)
}