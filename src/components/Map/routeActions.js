import {createAction} from 'redux-actions';

export const getAddresses = createAction("GET_ADDRESSES");
export const addAddresses = createAction(
	"ADD_ADDRESSES",
	(addresses) => ({addresses})
);

export const getRoute = createAction(
	"GET_ROUTE",
	(startRoute, endRoute) => ({startRoute, endRoute})
);

export const addRoute = createAction(
	"ADD_ROUTE",
	(route) => ({route})
);