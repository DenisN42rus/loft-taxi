import {addRoute, addCoordinates} from '../actions/routeActions';

export const initialState = {
	addresses: [],
	coordinates: []
}

export default function (state = initialState, action) {
	switch (action.type) {
		case addRoute.toString(): {
			return Object.assign({}, state, action.payload)
		}
		case addCoordinates.toString(): {
			return Object.assign({}, state, action.payload)
		}
		default:
			return state;
	}
}