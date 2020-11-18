import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from './types';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

// Load User
export const loadUser = () => async (dispatch) => {
  // Load User action, will take the token and send a request to the api/auth route and then get the user back and also set is authenticated is true with USER_LOADED action type
  // Check if token avaiable
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    console.log('load user');
    const res = await axios.get('/api/auth');
    console.log('load user' + res.data);

    dispatch({
      type: USER_LOADED,
      payload: res.data, // Data sent form route /api/auth
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login User Action
export const loginUser = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/login', body, config);
    console.log('login user:' + res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data, // Token, because we get a token back on a successful response
    });

    dispatch(loadUser()); // Load user runs immediately
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Register User Action
export const registerUser = ({ fullname, username, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ fullname, username, email, password });

  try {
    console.log('register user');
    const res = await axios.post('/api/register', body, config);
    console.log('register user:' + res.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data, // Token, because we get a token back on a successful response
    });
    dispatch(loadUser()); // Load user runs immediately
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Logout Action / Clear Profile
export const logout = () => (dispatch) => {
  //   dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
