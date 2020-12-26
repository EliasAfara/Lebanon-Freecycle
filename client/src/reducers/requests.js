import {
  GET_ALL_REQUESTS,
  GET_ALL_USER_REQUESTS,
  GET_A_SINGLE_REQUEST,
  REQUESTS_ERROR,
  CREATE_A_REQUEST_SUCCESS,
  CREATE_REQUEST_FAIL,
  UPDATE_A_REQUEST_SUCCESS,
  UPDATE_REQUEST_STATUS_SUCCESS,
  UPDATE_REQUEST_FAIL,
  DELETE_A_REQUEST,
} from '../actions/types';

const initialState = {
  allRequests: [],
  userRequests: [],
  singleRequests: null,
  loading: true,
  error: {},
};

export default function requests(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_REQUESTS:
      return {
        ...state,
        allRequests: payload,
        loading: false,
        error: {},
      };
    case GET_ALL_USER_REQUESTS:
      return {
        ...state,
        userRequests: payload,
        loading: false,
        error: {},
      };
    case GET_A_SINGLE_REQUEST:
      return {
        ...state,
        singleRequests: payload,
        loading: false,
        error: {},
      };
    case CREATE_A_REQUEST_SUCCESS:
    case UPDATE_A_REQUEST_SUCCESS:
    case UPDATE_REQUEST_STATUS_SUCCESS:
    case DELETE_A_REQUEST:
      return {
        ...state,
        allRequests: payload,
        loading: false,
        error: {},
      };
    case CREATE_REQUEST_FAIL:
    case UPDATE_REQUEST_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case REQUESTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        allRequests: [],
        userRequests: [],
        singleRequests: null,
      };

    default:
      return state;
  }
}
