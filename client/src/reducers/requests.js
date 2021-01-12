import * as actionsType from '../actions/types';

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
  createRequestFormLoading: false,
  error: {},
};

export default function requests(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionsType.RESET_GET_ALL_REQUESTS_LOADING:
      return {
        ...state,
        loading: true,
        editRequestFormLoading: true,
        userRequestLoading: true,
        singleRequestLoading: true,
        singleRequestRedirectOnDelete: false,
      };
    case actionsType.GET_ALL_REQUESTS:
      return {
        ...state,
        allRequests: payload,
        loading: false,
        redirectPage: false,
      };
    case actionsType.GET_ALL_USER_REQUESTS:
      return {
        ...state,
        userRequests: payload,
        userRequestLoading: false,
        redirectPage: false,
      };
    case actionsType.CLEAR_USER_REQUESTS:
      return {
        ...state,
        userRequests: [],
        userRequestLoading: true,
      };
    case actionsType.GET_A_SINGLE_REQUEST:
      return {
        ...state,
        singleRequests: payload,
        editRequestFormLoading: false,
        singleRequestLoading: false,
      };
    case actionsType.CLEAR_SINGLE_REQUEST:
      return {
        ...state,
        singleRequests: null,
        editRequestFormLoading: true,
        loading: true,
        singleRequestLoading: true,
        singleRequestRedirectOnDelete: false,
        redirectPage: false,
      };
    case actionsType.REQUEST_FORM_LOADING:
      return {
        ...state,
        createRequestFormLoading: true,
      };
    case actionsType.CREATE_A_REQUEST_SUCCESS:
      return {
        ...state,
        allRequests: {
          totalRequests: state.allRequests.totalRequests + 1,
          requests: [payload, ...state.allRequests.requests],
        },
        createRequestFormLoading: false,
        loading: false,
        redirectPage: true,
        error: {},
      };
    case actionsType.UPDATE_A_REQUEST_SUCCESS:
      let updatedRequests = [];
      if (state.allRequests && state.allRequests.requests) {
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

    case actionsType.UPDATE_REQUEST_STATUS_SUCCESS:
      let updatedRequestsStatus = [];
      if (state.allRequests && state.allRequests.requests) {
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
    case actionsType.DELETE_A_REQUEST:
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
    case actionsType.CREATE_REQUEST_FAIL:
      return {
        ...state,
        error: payload,
        createRequestFormLoading: false,
        loading: false,
      };

    case actionsType.UPDATE_REQUEST_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case actionsType.REQUESTS_ERROR:
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
