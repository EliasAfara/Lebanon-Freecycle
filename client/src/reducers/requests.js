import {
  RESET_GET_ALL_REQUESTS_LOADING,
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
} from '../actions/types';

const initialState = {
  allRequests: [],
  userRequests: [],
  singleRequests: null,
  loading: true,
  editRequestFormLoading: true,
  userRequestLoading: true,
  redirectPage: false,
  error: {},
};

export default function requests(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RESET_GET_ALL_REQUESTS_LOADING:
      return {
        ...state,
        loading: true,
        editRequestFormLoading: true,
        userRequestLoading: true,
      };
    case GET_ALL_REQUESTS:
      return {
        ...state,
        allRequests: payload,
        loading: false,
        redirectPage: false,
      };
    case GET_ALL_USER_REQUESTS:
      return {
        ...state,
        userRequests: payload,
        userRequestLoading: false,
        redirectPage: false,
      };
    case CLEAR_USER_REQUESTS:
      return {
        ...state,
        userRequests: [],
        userRequestLoading: true,
      };
    case GET_A_SINGLE_REQUEST:
      return {
        ...state,
        singleRequests: payload,
        editRequestFormLoading: false,
      };
    case CLEAR_SINGLE_REQUEST:
      return {
        ...state,
        singleRequests: null,
        editRequestFormLoading: true,
        loading: true,
      };
    case CREATE_A_REQUEST_SUCCESS:
      return {
        ...state,
        allRequests: {
          totalPages: state.allRequests.totalPages + 1,
          requests: [payload, ...state.allRequests.requests],
        },
        loading: false,
        redirectPage: true,
        error: {},
      };
    case UPDATE_A_REQUEST_SUCCESS:
      let updatedRequests = [];
      if (state.allRequests.requests.length > 0) {
        updatedRequests = state.allRequests.requests.map((obj) => {
          if (obj._id === payload._id) {
            return payload;
          } else {
            return obj;
          }
        });
      }

      let updatedUserRequests = [];
      if (state.userRequests.length > 0) {
        updatedUserRequests = state.userRequests.map((request) => {
          if (request._id === payload._id) {
            return payload;
          } else {
            return request;
          }
        });
      }

      return {
        ...state,
        allRequests: {
          totalPages: state.allRequests.totalPages,
          requests: updatedRequests,
        },
        userRequests: updatedUserRequests,
        loading: false,
        redirectPage: true,
        error: {},
      };

    case UPDATE_REQUEST_STATUS_SUCCESS:
      let updatedRequestsStatus = [];
      if (state.allRequests.requests.length > 0) {
        updatedRequestsStatus = state.allRequests.requests.map((obj) => {
          if (obj._id === payload._id) {
            return payload;
          } else {
            return obj;
          }
        });
      }

      let updatedUserRequestsStatus = [];
      if (state.userRequests.length > 0) {
        updatedUserRequestsStatus = state.userRequests.map((request) => {
          if (request._id === payload._id) {
            return payload;
          } else {
            return request;
          }
        });
      }

      return {
        ...state,
        allRequests: {
          totalPages: state.allRequests.totalPages,
          requests: updatedRequestsStatus,
        },
        userRequests: updatedUserRequestsStatus,
        loading: false,
        redirectPage: false,
        error: {},
      };
    case DELETE_A_REQUEST:
      let filteredRequests = [];
      if (state.allRequests.requests.length > 0) {
        filteredRequests = state.allRequests.requests.filter(
          (request) => request._id !== payload
        );
      }
      let newUserRequests = [];
      if (state.userRequests.length > 0) {
        newUserRequests = state.userRequests.filter(
          (request) => request._id !== payload
        );
      }
      return {
        ...state,
        allRequests: {
          totalPages: state.allRequests.totalPages - 1,
          requests: filteredRequests,
        },
        userRequests: newUserRequests,
        loading: false,
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
