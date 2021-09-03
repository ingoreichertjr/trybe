import { combineReducers } from 'redux';
import user from './userReducer';
import game from './gameReducer';

const rootReducer = combineReducers({ user, game });

export default rootReducer;
