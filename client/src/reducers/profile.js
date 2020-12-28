import {
  CLEAR_PROFILE,
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  USER_PROFILE_ERROR,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_PASSWORD_ERROR,
  DELETE_A_REQUEST,
} from '../actions/types';

const initialState = {
  profile: null,
  loading: true,
  error: {},
};

export default function profile(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_PROFILE:
    case UPDATE_USER_PROFILE:
    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        profile: payload,
        loading: false,
        error: {},
      };
    case UPDATE_USER_PASSWORD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case USER_PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };

    case DELETE_A_REQUEST:
      let newUserRequests = [];
      if (state.profile !== null) {
        newUserRequests = state.profile.requests.filter(
          (requestObj) => requestObj.request !== payload
        );
      }
      return {
        ...state,
        profile: { ...state.profile, requests: newUserRequests },
        loading: false,
      };

    default:
      return state;
  }
}
