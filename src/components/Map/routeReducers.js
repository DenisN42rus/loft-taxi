import {addAddresses, addRoute} from './routeActions';

export const initialState = {
	addresses: [],
	route: []
}

export default function (state = initialState, action) {
	switch (action.type) {
		case addAddresses.toString(): {
			return Object.assign({}, state, action.payload)
		}
		case addRoute.toString(): {
			return Object.assign({}, state, action.payload)
		}
		default:
			return state;
	}
}