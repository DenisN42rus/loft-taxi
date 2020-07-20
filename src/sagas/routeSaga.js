import {takeEvery, call, put} from 'redux-saga/effects';
import {getRoute, addRoute, getAddress, addCoordinates} from '../actions/routeActions';
import {serverGetRoute, serverGetAddress} from '../api';

export function* addRouteSaga(action) {
	const result = yield call(serverGetRoute);
	if(result) {
		yield put(addRoute(result.addresses))
	}
}

export function* addCoordinatesSaga(action) {
		const {startRoute, endRoute} = action.payload;
		const result = yield call(serverGetAddress, startRoute, endRoute);
		if(result) {
			yield put(addCoordinates(result))
		}
}

export function* routeSaga() {
	yield takeEvery(getRoute, addRouteSaga)
	yield takeEvery(getAddress, addCoordinatesSaga)
}