import { combineReducers } from 'redux';
import registerRed from './registerRed';
import loginRed from './loginRed';

const rootReducer = combineReducers({ registerRed, loginRed });

export default rootReducer;
