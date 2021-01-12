import * as actionsType from '../actions/types';

const initialState = {
  profile: null,
  profileLoading: true,
  error: {},
};

export default function profile(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionsType.CLEAR_USER_PROFILE:
      return {
        ...state,
        profile: null,
        profileLoading: true,
      };

    case actionsType.GET_USER_PROFILE:
    case actionsType.UPDATE_USER_PROFILE:
    case actionsType.UPDATE_USER_PASSWORD:
      return {
        ...state,
        profile: payload,
        profileLoading: false,
        error: {},
      };
    case actionsType.UPDATE_USER_PASSWORD_ERROR:
      return {
        ...state,
        error: payload,
        profileLoading: false,
      };
    case actionsType.USER_PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        profileLoading: false,
        profile: null,
      };
    case actionsType.CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        profileLoading: false,
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
    case actionsType.DELETE_A_DONATION:
      let updatedProfileDonations = { ...state.profile };
      let newUserProfileDonations = [];
      if (state.profile !== null && state.profile.donations.length > 0) {
        newUserProfileDonations = state.profile.donations.filter(
          (donationObj) => donationObj.donation !== payload
        );
        updatedProfileDonations.donations = newUserProfileDonations;
        return {
          ...state,
          profile: updatedProfileDonations,
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
