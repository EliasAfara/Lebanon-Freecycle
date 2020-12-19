import {
  CLEAR_PROFILE,
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  USER_PROFILE_ERROR,
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
      return {
        ...state,
        profile: payload,
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

    default:
      return state;
  }
}
