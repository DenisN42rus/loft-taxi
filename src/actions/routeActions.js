import {createAction} from 'redux-actions';

export const getRoute = createAction("GET_ROUTE");
export const addRoute = createAction(
	"ADD_ROUTE",
	(addresses) => ({addresses})
);

export const getAddress = createAction(
	"GET_ADDRESS",
	(startRoute, endRoute) => ({startRoute, endRoute})
);

export const addCoordinates = createAction(
	"ADD_COORDINATES",
	(coordinates) => ({coordinates})
);