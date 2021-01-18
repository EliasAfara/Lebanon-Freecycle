import * as actionsType from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'), // Stored in local storage
  isAuthenticated: null,
  authLoading: true,
  loginFormLoading: false,
  registerFormLoading: false,
  user: null,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionsType.USER_LOADED:
    case actionsType.UPDATE_USER_PROFILE:
    case actionsType.UPDATE_USER_PASSWORD:
      return {
        ...state,
        isAuthenticated: true, // Token worked, user now is logged in
        authLoading: false,
        user: payload,
      };

    case actionsType.REGISTER_FORM_LOADING:
      return {
        ...state,
        registerFormLoading: true,
      };

    case actionsType.REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state, // Spread operator state, Whatever currently in the state
        ...payload,
        isAuthenticated: true,
        registerFormLoading: false,
        authLoading: false,
      };

    case actionsType.LOGIN_FORM_LOADING:
      return {
        ...state,
        loginFormLoading: true,
      };

    case actionsType.LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state, // Spread operator state, Whatever currently in the state
        ...payload,
        isAuthenticated: true,
        authLoading: false,
        loginFormLoading: false,
      };

    case actionsType.LOGIN_FAIL:
    case actionsType.REGISTER_FAIL:
    case actionsType.AUTH_ERROR:
    case actionsType.LOGOUT:
    case actionsType.ACCOUNT_DELETED:
      // Clears all the auth state and it also clears the token from local storage
      localStorage.removeItem('token'); // Remove token from loal storage
      return {
        ...state,
        isAuthenticated: false,
        authLoading: false,
        loginFormLoading: false,
        registerFormLoading: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
}
