export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (payload) => ({ type: GET_PICTURE, payload });

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(requestAPI());
    try {
      const res = await fetch('https://aws.random.cat/meow');
      if(!res.ok) {throw new Error('An error occurred during fetch')};
      const data = await res.json();
      dispatch(getPicture(data));
    } catch (error) {
      console.error(error.message);
    }
  }
}
