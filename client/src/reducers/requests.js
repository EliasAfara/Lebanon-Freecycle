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
  allRequests: {},
  userRequests: [],
  singleRequests: null,
  singleRequestLoading: true,
  loading: true,
  editRequestFormLoading: true,
  userRequestLoading: true,
  redirectPage: false,
  singleRequestRedirectOnDelete: false,
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
        singleRequestLoading: true,
        singleRequestRedirectOnDelete: false,
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
        singleRequestLoading: false,
      };
    case CLEAR_SINGLE_REQUEST:
      return {
        ...state,
        singleRequests: null,
        editRequestFormLoading: true,
        loading: true,
        singleRequestLoading: true,
        singleRequestRedirectOnDelete: false,
      };
    case CREATE_A_REQUEST_SUCCESS:
      return {
        ...state,
        allRequests: {
          totalRequests: state.allRequests.totalRequests + 1,
          requests: [payload, ...state.allRequests.requests],
        },
        loading: false,
        redirectPage: true,
        error: {},
      };
    case UPDATE_A_REQUEST_SUCCESS:
      let updatedRequests = [];
      if (Object.keys(state.allRequests).length > 0) {
        if (state.allRequests.requests.length > 0) {
          updatedRequests = state.allRequests.requests.map((obj) => {
            if (obj._id === payload._id) {
              return payload;
            } else {
              return obj;
            }
          });
        }
      } else {
        updatedRequests = state.allRequests.requests;
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
          totalRequests: state.allRequests.totalRequests,
          requests: updatedRequests,
        },
        userRequests: updatedUserRequests,
        redirectPage: true,
        error: {},
      };

    case UPDATE_REQUEST_STATUS_SUCCESS:
      let updatedRequestsStatus = [];
      if (Object.keys(state.allRequests).length > 0) {
        if (state.allRequests.requests.length > 0) {
          updatedRequestsStatus = state.allRequests.requests.map((obj) => {
            if (obj._id === payload._id) {
              return payload;
            } else {
              return obj;
            }
          });
        }
      } else {
        updatedRequestsStatus = state.allRequests.requests;
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

      let updateSingleRequestStatus = state.singleRequests;
      if (
        state.singleRequests !== null &&
        state.singleRequests._id === payload._id
      ) {
        updateSingleRequestStatus = payload;
      }

      return {
        ...state,
        allRequests: {
          totalRequests: state.allRequests.totalRequests,
          requests: updatedRequestsStatus,
        },
        userRequests: updatedUserRequestsStatus,
        singleRequests: updateSingleRequestStatus,
        redirectPage: false,
        error: {},
      };
    case DELETE_A_REQUEST:
      let filteredRequests = [];
      let newTotalRequests = state.allRequests.totalRequests;
      if (state.allRequests && state.allRequests.requests) {
        newTotalRequests--;
        if (state.allRequests.requests.length > 0) {
          filteredRequests = state.allRequests.requests.filter(
            (request) => request._id !== payload
          );
        }
      } else {
        filteredRequests = state.allRequests.requests;
      }

      let newUserRequests = [];
      if (state.userRequests.length > 0) {
        newUserRequests = state.userRequests.filter(
          (request) => request._id !== payload
        );
      }

      let singleRequestDeleteCheck = state.singleRequests;
      if (
        state.singleRequests !== null &&
        state.singleRequests._id === payload
      ) {
        singleRequestDeleteCheck = null;
      }
      return {
        ...state,
        allRequests: {
          totalRequests: newTotalRequests,
          requests: filteredRequests,
        },
        userRequests: newUserRequests,
        singleRequests: singleRequestDeleteCheck,
        singleRequestRedirectOnDelete: true,
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
        allRequests: {},
        userRequests: [],
        singleRequests: null,
      };

    default:
      return state;
  }
}
