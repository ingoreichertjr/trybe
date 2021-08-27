import { combineReducers } from "redux";
import dogDB from "./dogDB";

const rootReducer = combineReducers({ dogDB });

export default rootReducer;
