import axios from 'axios';

import {
  GET_ALL_DONATIONS,
  GET_ALL_USER_DONATIONS,
  RESET_GET_ALL_DONATIONS_LOADING,
  CLEAR_USER_DONATIONS,
  GET_A_SINGLE_DONATION,
  CLEAR_SINGLE_DONATION,
  DONATIONS_ERROR,
  CREATE_A_DONATION_SUCCESS,
  CREATE_DONATION_FAIL,
  ADD_A_DONATION_LOCATION,
  UPDATE_A_DONATION_SUCCESS,
  UPDATE_DONATION_STATUS_SUCCESS,
  UPDATE_DONATION_FAIL,
  DELETE_A_DONATION,
  CLEAR_USER_PROFILE,
  DONATION_FORM_LOADING,
} from './types';

import { setAlert } from './alert';
import { setToast } from './toast';

export const getAllDonations = (quries) => async (dispatch) => {
  try {
    let res = {};
    if (quries.length > 0) {
      res = await axios.get(`/api/donations/?${quries}`);
    } else {
      res = await axios.get('/api/donations');
    }
    dispatch({
      type: CLEAR_USER_PROFILE,
    });

    dispatch({
      type: RESET_GET_ALL_DONATIONS_LOADING,
    });
    dispatch({
      type: GET_ALL_DONATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: DONATIONS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const getAllUserDonations = (quries) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/donations/user/?${quries}`);

    console.log(res);

    dispatch({
      type: CLEAR_USER_DONATIONS,
    });
    dispatch({
      type: GET_ALL_USER_DONATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: DONATIONS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const getSingleDonation = (donationId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/donations/single/${donationId}`);

    console.log(res);

    dispatch({
      type: CLEAR_SINGLE_DONATION,
    });

    dispatch({
      type: GET_A_SINGLE_DONATION,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: DONATIONS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const createDonation = (formData) => async (dispatch) => {
  dispatch({
    type: DONATION_FORM_LOADING,
  });

  try {
    const res = await axios.post('/api/donations', formData);

    dispatch({
      type: CREATE_A_DONATION_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: ADD_A_DONATION_LOCATION,
      payload: res.data.location,
    });

    dispatch(setToast('Donation was created successfully', 'success'));
  } catch (err) {
    console.log(err);
    dispatch({
      type: CREATE_DONATION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });

    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const updateDonation = (formData, donationId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/donations/${donationId}`, formData);

    dispatch({
      type: UPDATE_A_DONATION_SUCCESS,
      payload: res.data,
    });

    dispatch(setToast('Donation was updated successfully', 'success'));
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: UPDATE_DONATION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateDonationStatus = (donationId, donationStatus) => async (
  dispatch
) => {
  try {
    const res = await axios.put(
      `/api/donations/${donationId}/${donationStatus}`
    );

    dispatch({
      type: UPDATE_DONATION_STATUS_SUCCESS,
      payload: res.data,
    });

    dispatch(setToast('Donation status was changed successfuly', 'success'));
  } catch (err) {
    console.log(err);
    dispatch({
      type: UPDATE_DONATION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteDonation = (donationId) => async (dispatch) => {
  try {
    await axios.delete(`/api/donations/${donationId}`);

    dispatch({
      type: DELETE_A_DONATION,
      payload: donationId,
    });

    dispatch(setToast('You have just deleted a donation!', 'warning'));
  } catch (err) {
    console.log(err);
    dispatch({
      type: DONATIONS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
