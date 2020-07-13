import {combineReducers} from 'redux';
import auth from './authReducers';
import card from './cardRedusers';

export default combineReducers({auth, card});