import axios from 'axios';

import {
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  ACCOUNT_DELETED,
  USER_PROFILE_ERROR,
} from './types';

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

    console.log(`${formData.username} Profile was Updated Successfully`);

    history.push(`/profile/${formData.username}`);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error));
    }

    dispatch({
      type: USER_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete User Account
export const deleteAccount = () => async (dispatch) => {
  try {
    await axios.delete('/api/profile');

    dispatch({
      type: ACCOUNT_DELETED,
    });

    console.log('You account has been permanently deleted!');

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