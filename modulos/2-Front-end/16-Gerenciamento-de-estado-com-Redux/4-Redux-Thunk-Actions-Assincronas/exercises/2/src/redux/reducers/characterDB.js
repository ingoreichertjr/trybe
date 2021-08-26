import { IS_FETCHING, UPDATE_CHAR, HANDLE_ERROR } from "../actions"

const initialState = {
  loading: false,
  character: undefined,
  error: undefined
}

const characterDB = (state = initialState, { type, payload }) => {
  switch (type) {

  case IS_FETCHING:
    return { ...state, loading: true }

  case UPDATE_CHAR:
    return { ...state, loading: false, character: payload[0], error: undefined }

  case HANDLE_ERROR:
    return { ...state, loading: false, character: undefined, error: payload.message }

  default:
    return state
  }
}

export default characterDB;
