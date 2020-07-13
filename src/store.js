import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import {authMiddleware} from './middlewares/authMiddleware';
import {cardMiddleware} from './middlewares/cardMiddleware';
import {registerMiddleware} from './middlewares/registerMiddleware';

export const store = createStore(
		rootReducer, 
		compose(applyMiddleware(authMiddleware),
						applyMiddleware(cardMiddleware),
						applyMiddleware(registerMiddleware)
		));

store.subscribe(() => {
	console.log(store.getState())
})
