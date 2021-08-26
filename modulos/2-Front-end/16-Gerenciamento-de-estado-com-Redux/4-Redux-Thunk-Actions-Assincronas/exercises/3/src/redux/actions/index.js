export const UPDATE_LIST = 'UPDATE_LIST';
export const HANDLE_ERROR = 'HANDLE_ERROR';
export const LOADING = 'LOADING';

export const loading = (subreddit, time) => ({
  type: LOADING,
  payload: {
    selected: subreddit,
    time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
  }
});

export const updateList = (payload) => ({
  type: UPDATE_LIST,
  payload,
});

export const handleError = (payload) => ({
  type: HANDLE_ERROR,
  payload,
});

export const fetchReddit = (subreddit) => {
  return async (dispatch) => {
    dispatch(loading(subreddit, new Date()));
    try {
      const URL = `https://www.reddit.com/r/${subreddit}.json`;
      const res = await fetch(URL);
      if (!res.ok) throw new Error('failed to fetch');
      const data = await res.json();
      dispatch(updateList(data.data.children));
    } catch (err) {
      dispatch(handleError(err.message));
    }
  };
};
