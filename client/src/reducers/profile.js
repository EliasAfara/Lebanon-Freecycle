import * as actionsType from '../actions/types';

const initialState = {
  profile: null,
  loading: true,
  error: {},
};

export default function profile(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionsType.GET_USER_PROFILE:
    case actionsType.UPDATE_USER_PROFILE:
    case actionsType.UPDATE_USER_PASSWORD:
      return {
        ...state,
        profile: payload,
        loading: false,
        error: {},
      };
    case actionsType.UPDATE_USER_PASSWORD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case actionsType.USER_PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case actionsType.CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };

    case actionsType.DELETE_A_REQUEST:
      let updatedProfile = { ...state.profile };
      let newUserRequests = [];
      if (state.profile !== null && state.profile.requests.length > 0) {
        newUserRequests = state.profile.requests.filter(
          (requestObj) => requestObj.request !== payload
        );
        updatedProfile.requests = newUserRequests;
        return {
          ...state,
          profile: updatedProfile,
        };
      } else {
        return {
          ...state,
        };
      }

    default:
      return state;
  }
}
