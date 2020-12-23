import axios from 'axios';

import {
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  USER_PROFILE_ERROR,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_PASSWORD_ERROR,
} from './types';
import { setToast } from './toast';

// Get user profile by Username
export const getProfileByUsername = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/${username}`);

    dispatch({
      type: GET_USER_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update User Profile
export const updateProfile = (formData, history) => async (dispatch) => {
  // history object which has a method called push that will redirect us to a client side route
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put('/api/profile/update', formData, config);

    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: res.data,
    });

    dispatch(setToast('Profile was updated successfully', 'success'));

    history.push(`/profile/${formData.username.toLowerCase()}`);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.error(error));
    }

    dispatch({
      type: USER_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update User Password
export const updatePassword = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put(
      '/api/profile/update/password',
      formData,
      config
    );

    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: res.data,
    });

    dispatch(setToast('Password was updated successfully', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.error(error));
    }

    dispatch({
      type: UPDATE_USER_PASSWORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete User Account
export const deleteAccount = () => async (dispatch) => {
  try {
    await axios.delete('/api/profile');

    dispatch({
      type: CLEAR_PROFILE,
    });
    dispatch({
      type: ACCOUNT_DELETED,
    });

    dispatch(setToast('You account has been permanently deleted!', 'warning'));

    //   dispatch(
    //     setAlert('You account has been permanently deleted!', 'warning')
    //   );
  } catch (err) {
    dispatch({
      type: USER_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
