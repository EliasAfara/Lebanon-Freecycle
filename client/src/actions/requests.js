import axios from 'axios';

import {
  GET_ALL_REQUESTS,
  GET_ALL_USER_REQUESTS,
  CLEAR_USER_REQUESTS,
  GET_A_SINGLE_REQUEST,
  CLEAR_SINGLE_REQUEST,
  REQUESTS_ERROR,
  CREATE_A_REQUEST_SUCCESS,
  CREATE_REQUEST_FAIL,
  UPDATE_A_REQUEST_SUCCESS,
  UPDATE_REQUEST_STATUS_SUCCESS,
  UPDATE_REQUEST_FAIL,
  DELETE_A_REQUEST,
} from './types';
import { setAlert } from './alert';
import { setToast } from './toast';

export const getAllRequests = (quries) => async (dispatch) => {
  try {
    let res = {};
    if (quries.length > 0) {
      res = await axios.get(`/api/requests/?${quries}`);
    } else {
      res = await axios.get('/api/requests');
    }

    dispatch({
      type: GET_ALL_REQUESTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REQUESTS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const getAllUserRequests = (quries) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/requests/user/?${quries}`);

    console.log(res);

    dispatch({
      type: CLEAR_USER_REQUESTS,
    });
    dispatch({
      type: GET_ALL_USER_REQUESTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REQUESTS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const getSingleRequest = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`api/requests/single/${id}`);

    console.log(res);

    dispatch({
      type: CLEAR_SINGLE_REQUEST,
    });

    dispatch({
      type: GET_A_SINGLE_REQUEST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REQUESTS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

export const createRequest = (formData, history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post('/api/requests', body, config);

    dispatch({
      type: CREATE_A_REQUEST_SUCCESS,
      payload: res.data, // Token, because we get a token back on a successful response
    });

    dispatch(setToast('Request was created successfully', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: CREATE_REQUEST_FAIL,
    });
  }
};

export const updateRequest = (formData, requestId, history) => async (
  dispatch
) => {
  const body = JSON.stringify(formData);

  try {
    const res = await axios.put('/api/requests', body);

    dispatch({
      type: UPDATE_A_REQUEST_SUCCESS,
      payload: res.data,
    });

    dispatch(setToast('Request was updated successfully', 'success'));

    history.push(`/request/${requestId}`);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: UPDATE_REQUEST_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateRequestStatus = (requestId, requestStatus) => async (
  dispatch
) => {
  try {
    const res = await axios.put(`/api/requests/${requestId}/${requestStatus}`);

    dispatch({
      type: UPDATE_REQUEST_STATUS_SUCCESS,
      payload: res.data,
    });

    dispatch(setToast('Request status was changed successfuly', 'success'));
  } catch (err) {
    dispatch({
      type: UPDATE_REQUEST_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteRequest = (requestId) => async (dispatch) => {
  try {
    await axios.delete(`/api/requests/${requestId}`);

    dispatch({
      type: DELETE_A_REQUEST,
    });

    dispatch(setToast('You have just deleted a request!', 'warning'));
  } catch (err) {
    dispatch({
      type: REQUESTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
