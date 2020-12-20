import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PASSWORD,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'), // Stored in local storage
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
    case UPDATE_USER_PROFILE:
    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        isAuthenticated: true, // Token worked, user now is logged in
        loading: false,
        user: payload,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state, // Spread operator state, Whatever currently in the state
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      // Clears all the auth state and it also clears the token from local storage
      localStorage.removeItem('token'); // Remove token from loal storage
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
