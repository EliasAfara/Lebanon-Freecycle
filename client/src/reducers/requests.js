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
      let newCreatedRequests = [];
      if (state.allRequests && state.allRequests.requests) {
        if (state.allRequests.requests.length > 0) {
          let tempNewCreatedRequests = state.allRequests.requests;
          tempNewCreatedRequests[9] = tempNewCreatedRequests[8];
          tempNewCreatedRequests[8] = tempNewCreatedRequests[7];
          tempNewCreatedRequests[7] = tempNewCreatedRequests[6];
          tempNewCreatedRequests[6] = tempNewCreatedRequests[5];
          tempNewCreatedRequests[5] = tempNewCreatedRequests[4];
          tempNewCreatedRequests[4] = tempNewCreatedRequests[3];
          tempNewCreatedRequests[3] = tempNewCreatedRequests[2];
          tempNewCreatedRequests[2] = tempNewCreatedRequests[1];
          tempNewCreatedRequests[1] = tempNewCreatedRequests[0];
          tempNewCreatedRequests[0] = payload;

          newCreatedRequests = tempNewCreatedRequests;
        }
      } else {
        newCreatedRequests = undefined;
      }

      return {
        ...state,
        allRequests: {
          totalRequests:
            state.allRequests.totalRequests &&
            state.allRequests.totalRequests + 1,
          requests: newCreatedRequests,
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

    case actionsType.REQUEST_LIKE_UNLIKE:
      let updateRequestsLikes = state.allRequests.requests;
      if (state.allRequests && state.allRequests.requests) {
        if (state.allRequests.requests.length > 0) {
          updateRequestsLikes = state.allRequests.requests.map((request) => {
            if (request._id === payload.requestId) {
              return { ...request, likes: payload.likes };
            } else {
              return { ...request };
            }
          });
        }
      }

      let updatedUserRequestsLikes = [];
      if (state.userRequests.length > 0) {
        updatedUserRequestsLikes = state.userRequests.map((request) => {
          if (request._id === payload.requestId) {
            return { ...request, likes: payload.likes };
          } else {
            return { ...request };
          }
        });
      }

      let updateSingleRequestLikes = state.singleRequests;
      if (state.singleRequests !== null) {
        if (state.singleRequests._id === payload.requestId) {
          updateSingleRequestLikes = {
            ...state.singleRequests,
            likes: payload.likes,
          };
        }
      }

      return {
        ...state,
        allRequests: {
          totalRequests: state.allRequests.totalRequests,
          requests: updateRequestsLikes,
        },
        userRequests: updatedUserRequestsLikes,
        singleRequests: updateSingleRequestLikes,
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

    case actionsType.ACCOUNT_DELETED:
      let filterDeletedAccountRequests = [];
      let newTotalRequestsAfterAccountDeletion =
        state.allRequests.totalRequests;

      let currentCountedTotalRequestsByUser = state.allRequests.requests.filter(
        (request) => request.user.id === payload
      ).length;
      if (state.allRequests && state.allRequests.requests) {
        if (currentCountedTotalRequestsByUser > 0) {
          newTotalRequestsAfterAccountDeletion =
            state.allRequests.totalRequests - currentCountedTotalRequestsByUser;
        }

        if (state.allRequests.requests.length > 0) {
          filterDeletedAccountRequests = state.allRequests.requests.filter(
            (request) => request.user.id !== payload
          );
        }
      } else {
        filterDeletedAccountRequests = state.allRequests.requests;
      }
      return {
        ...state,
        allRequests: {
          totalRequests: newTotalRequestsAfterAccountDeletion,
          requests: filterDeletedAccountRequests,
        },
      };

    default:
      return state;
  }
}
