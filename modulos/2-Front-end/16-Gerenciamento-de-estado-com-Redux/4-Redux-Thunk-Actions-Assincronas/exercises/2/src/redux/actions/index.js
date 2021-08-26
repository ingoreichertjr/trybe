import charAPI from "../../services/charAPI";

export const IS_FETCHING = 'IS_FETCHING';
export const UPDATE_CHAR = 'UPDATE_CHAR';
export const HANDLE_ERROR = 'HANDLE_ERROR';

export const isFetching = () => ({
  type: IS_FETCHING,
});

export const updateChar = (payload) => ({
  type: UPDATE_CHAR,
  payload
})

export const handleError = (payload) => ({
  type: HANDLE_ERROR,
  payload,
})

export const fetchData = (char) => {
  return async (dispatch) => {
    dispatch(isFetching);
    try {
      const data = await charAPI(char)
      console.log(data);
      dispatch(updateChar(data))
    } catch (e) {
      dispatch(handleError(e))
    }
  }
}
