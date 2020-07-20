import {combineReducers} from 'redux';
import auth from './authReducers';
import card from './cardRedusers';
import route from './routeReducers';

export default combineReducers({auth, card, route});