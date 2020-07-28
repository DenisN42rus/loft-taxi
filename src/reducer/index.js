import {combineReducers} from 'redux';
import auth from '../components/App';
import card from '../components/Profile';
import route from '../components/Map';

export default combineReducers({auth, card, route});