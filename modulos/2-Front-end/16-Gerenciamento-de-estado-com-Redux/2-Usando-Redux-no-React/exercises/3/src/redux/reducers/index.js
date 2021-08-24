import { combineReducers } from "redux";
import signalReducer from "./signalReducer";
import carsReducer from "./carsReducer";

const rootReducer = combineReducers({ signalReducer, carsReducer });

export default rootReducer;
