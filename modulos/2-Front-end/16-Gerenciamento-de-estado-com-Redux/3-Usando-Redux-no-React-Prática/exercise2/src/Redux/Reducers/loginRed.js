import { LOGIN_STATUS} from "../Actions";

const initialState = {
  status: false,
}

const loginRed = (state = initialState, { type, payload }) => {
  switch (type) {
  case LOGIN_STATUS:
    return { ...state, status: payload }
  default:
    return state
  }
}

export default loginRed;
