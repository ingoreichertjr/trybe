import { combineReducers } from 'redux';
import personalInfo from './personalInfo';
import professionalInfo from './professionalInfo';

const rootReducer = combineReducers({ personalInfo, professionalInfo });

export default rootReducer;
