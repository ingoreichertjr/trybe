import { UPDATE_LIST, HANDLE_ERROR, LOADING } from "../actions"

const initialState = {
  selected: '',
  time: '',
  loading: false,
  list: [],
  error: '',
}

const redditDB = (state = initialState, { type, payload }) => {
  switch (type) {

  case LOADING:
    return { ...state, ...payload, loading: true, list: [], error: ''  }

  case UPDATE_LIST:
    return { ...state, loading: false, list: payload, error: '' }

  case HANDLE_ERROR:
    return { ...state, loading: false, list: [], error: payload }

  default:
    return state
  }
}

export default redditDB;
