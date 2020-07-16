import {takeEvery, call, put} from 'redux-saga/effects';
import {getRoute, addRoute, getAddress, addCoordinates} from '../actions/routeActions';
import {serverGetRoute, serverGetAddress} from '../api';

export function* routeSaga() {
	yield takeEvery(getRoute, function*() {
		const result = yield call(serverGetRoute);
		if(result) {
			yield put(addRoute(result.addresses))
		}
	})

	yield takeEvery(getAddress, function*(action) {
		const {startRoute, endRoute} = action.payload;
		const result = yield call(serverGetAddress, startRoute, endRoute);
		if(result) {
			yield put(addCoordinates(result))
		}
	})
}