import { REGISTER_USER } from "../Actions";

const initialState = []

const registerRed = (state = initialState, { type, payload }) => {
  switch (type) {
  case REGISTER_USER:
    return  [...state, payload ]
  default:
    return state
  }
}

export default registerRed;
