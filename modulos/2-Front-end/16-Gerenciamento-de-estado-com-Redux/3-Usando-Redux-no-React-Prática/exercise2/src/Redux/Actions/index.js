export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_STATUS = 'LOGIN_STATUS';

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload,
});

export const loginStatus = (payload) => ({
  type: LOGIN_STATUS,
  payload,
});
