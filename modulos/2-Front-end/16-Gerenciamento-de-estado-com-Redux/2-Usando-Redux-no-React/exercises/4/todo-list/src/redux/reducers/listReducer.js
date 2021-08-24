import { ADD_ITEM } from "../actions";

const INITIAL_STATE = [];

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item]
    default:
      return state;
  }
}

export default listReducer;