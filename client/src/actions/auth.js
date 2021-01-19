import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FORM_LOADING,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  REGISTER_FORM_LOADING,
} from './types';
import setAuthToken from '../utils/setAuthToken';
import { setToast } from './toast';

// Load User
export const loadUser = () => async (dispatch) => {
  // Load User action, will take the token and send a request to the api/auth route and then get the user back and also set is authenticated is true with USER_LOADED action type
  // Check if token avaiable
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

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
export const loginUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(formData);

  dispatch({
    type: LOGIN_FORM_LOADING,
  });

  try {
    const res = await axios.post('/api/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data, // Token, because we get a token back on a successful response
    });

    dispatch(loadUser()); // Load user runs immediately
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        if (error.param === 'credentialsError') {
          dispatch(setToast(error.msg, 'danger'));
        }
      });
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Register User Action
export const registerUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(formData);

  dispatch({
    type: REGISTER_FORM_LOADING,
  });

  try {
    const res = await axios.post('/api/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data, // Token, because we get a token back on a successful response
    });

    dispatch(loadUser()); // Load user runs immediately
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        if (error.param === 'user_name_taken') {
          dispatch(setToast(error.msg, 'danger'));
        }
        if (error.param === 'email_taken') {
          dispatch(setToast(error.msg, 'danger'));
        }
      });
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Logout Action / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
