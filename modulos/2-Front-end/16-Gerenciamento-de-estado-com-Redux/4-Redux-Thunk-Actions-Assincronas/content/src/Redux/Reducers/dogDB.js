import { REQUEST_IMAGE, GET_IMAGE, FAILED_REQUEST } from "../Actions";

const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: payload, isFetching: false };
    default:
      return state;
  }
}

export default reducer;
