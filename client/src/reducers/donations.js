import * as actionsType from '../actions/types';

const initialState = {
  allDonations: {},
  userDonations: [],
  singleDonations: null,
  singleDonationLoading: true,
  DonatinosLoading: true,
  editDonationFormLoading: true,
  userDonationLoading: true,
  redirectPage: false,
  singleDonationRedirectOnDelete: false,
  createDonationFormLoading: false,
  error: {},
};

export default function donations(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionsType.GET_ALL_DONATIONS:
      return {
        ...state,
        allDonations: payload,
        DonatinosLoading: false,
        redirectPage: false,
      };
    case actionsType.GET_ALL_USER_DONATIONS:
      return {
        ...state,
        userDonations: payload,
        userDonationLoading: false,
        redirectPage: false,
      };
    case actionsType.CLEAR_USER_DONATIONS:
      return {
        ...state,
        userDonations: [],
        userDonationLoading: true,
      };
    case actionsType.GET_A_SINGLE_DONATION:
      return {
        ...state,
        singleDonations: payload,
        editDonationFormLoading: false,
        singleDonationLoading: false,
      };
    case actionsType.CLEAR_SINGLE_DONATION:
      return {
        ...state,
        singleDonations: null,
        editDonationFormLoading: true,
        singleDonationLoading: true,
        singleDonationRedirectOnDelete: false,
        redirectPage: false,
      };

    case actionsType.DONATION_FORM_LOADING:
      return {
        ...state,
        createDonationFormLoading: true,
      };

    case actionsType.CREATE_A_DONATION_SUCCESS:
      let newCreatedDonations = [];
      if (state.allDonations && state.allDonations.Donations) {
        if (state.allDonations.donations.length > 0) {
          let tempNewCreatedDonations = state.allDonations.donations;
          tempNewCreatedDonations[9] = tempNewCreatedDonations[8];
          tempNewCreatedDonations[8] = tempNewCreatedDonations[7];
          tempNewCreatedDonations[7] = tempNewCreatedDonations[6];
          tempNewCreatedDonations[6] = tempNewCreatedDonations[5];
          tempNewCreatedDonations[5] = tempNewCreatedDonations[4];
          tempNewCreatedDonations[4] = tempNewCreatedDonations[3];
          tempNewCreatedDonations[3] = tempNewCreatedDonations[2];
          tempNewCreatedDonations[2] = tempNewCreatedDonations[1];
          tempNewCreatedDonations[1] = tempNewCreatedDonations[0];
          tempNewCreatedDonations[0] = payload;

          newCreatedDonations = tempNewCreatedDonations;
        }
      } else {
        newCreatedDonations = undefined;
      }
      return {
        ...state,
        allDonations: {
          totalDonations:
            state.allDonations.totalDonations &&
            state.allDonations.totalDonations + 1,
          donations: newCreatedDonations,
        },
        createDonationFormLoading: false,
        DonatinosLoading: false,
        redirectPage: true,
        error: {},
      };
    case actionsType.UPDATE_A_DONATION_SUCCESS:
      let updatedDonations = [];
      if (state.allDonations && state.allDonations.donations) {
        if (state.allDonations.donations.length > 0) {
          updatedDonations = state.allDonations.donations.map((obj) => {
            if (obj._id === payload._id) {
              return payload;
            } else {
              return obj;
            }
          });
        }
      } else {
        updatedDonations = state.allDonations.donations;
      }

      let updatedUserDonations = [];
      if (state.userDonations.length > 0) {
        updatedUserDonations = state.userDonations.map((donation) => {
          if (donation._id === payload._id) {
            return payload;
          } else {
            return donation;
          }
        });
      }

      return {
        ...state,
        allDonations: {
          totalDonations: state.allDonations.totalDonations,
          donations: updatedDonations,
        },
        userDonations: updatedUserDonations,
        redirectPage: true,
        error: {},
      };

    case actionsType.UPDATE_DONATION_STATUS_SUCCESS:
      let updatedDonationsStatus = [];
      if (state.allDonations && state.allDonations.donations) {
        if (state.allDonations.donations.length > 0) {
          updatedDonationsStatus = state.allDonations.donations.map((obj) => {
            if (obj._id === payload._id) {
              return payload;
            } else {
              return obj;
            }
          });
        }
      } else {
        updatedDonationsStatus = state.allDonations.donations;
      }

      let updatedUserDonationsStatus = [];
      if (state.userDonations.length > 0) {
        updatedUserDonationsStatus = state.userDonations.map((donation) => {
          if (donation._id === payload._id) {
            return payload;
          } else {
            return donation;
          }
        });
      }

      let updateSingleDonationStatus = state.singleDonations;
      if (
        state.singleDonations !== null &&
        state.singleDonations._id === payload._id
      ) {
        updateSingleDonationStatus = payload;
      }

      return {
        ...state,
        allDonations: {
          totalDonations: state.allDonations.totalDonations,
          donations: updatedDonationsStatus,
        },
        userDonations: updatedUserDonationsStatus,
        singleDonations: updateSingleDonationStatus,
        redirectPage: false,
        error: {},
      };

    case actionsType.DONATION_LIKE_UNLIKE:
      let updateDonationsLikes = state.allDonations.donations;
      if (state.allDonations && state.allDonations.donations) {
        if (state.allDonations.donations.length > 0) {
          updateDonationsLikes = state.allDonations.donations.map(
            (donation) => {
              if (donation._id === payload.donationId) {
                return { ...donation, likes: payload.likes };
              } else {
                return { ...donation };
              }
            }
          );
        }
      }

      let updatedUserDonationsLikes = [];
      if (state.userDonations.length > 0) {
        updatedUserDonationsLikes = state.userDonations.map((donation) => {
          if (donation._id === payload.donationId) {
            return { ...donation, likes: payload.likes };
          } else {
            return { ...donation };
          }
        });
      }

      let updateSingleDonationLikes = state.singleDonations;
      if (state.singleDonations !== null) {
        if (state.singleDonations._id === payload.donationId) {
          updateSingleDonationLikes = {
            ...state.singleDonations,
            likes: payload.likes,
          };
        }
      }

      return {
        ...state,
        allDonations: {
          totalDonations: state.allDonations.totalDonations,
          donations: updateDonationsLikes,
        },
        userDonations: updatedUserDonationsLikes,
        singleDonations: updateSingleDonationLikes,
      };

    case actionsType.DELETE_A_DONATION:
      let filteredDonations = [];
      let newTotalDonations = state.allDonations.totalDonations;
      if (state.allDonations && state.allDonations.donations) {
        newTotalDonations--;
        if (state.allDonations.donations.length > 0) {
          filteredDonations = state.allDonations.donations.filter(
            (donation) => donation._id !== payload
          );
        }
      } else {
        filteredDonations = state.allDonations.donations;
      }

      let newUserDonations = [];
      if (state.userDonations.length > 0) {
        newUserDonations = state.userDonations.filter(
          (donation) => donation._id !== payload
        );
      }

      let singleDonationDeleteCheck = state.singleDonations;
      if (
        state.singleDonations !== null &&
        state.singleDonations._id === payload
      ) {
        singleDonationDeleteCheck = null;
      }
      return {
        ...state,
        allDonations: {
          totalDonations: newTotalDonations,
          donations: filteredDonations,
        },
        userDonations: newUserDonations,
        singleDonations: singleDonationDeleteCheck,
        singleDonationRedirectOnDelete: true,
      };

    case actionsType.CREATE_DONATION_FAIL:
      return {
        ...state,
        error: payload,
        createDonationFormLoading: false,
        DonatinosLoading: false,
      };

    case actionsType.UPDATE_DONATION_FAIL:
      return {
        ...state,
        error: payload,
        DonatinosLoading: false,
      };
    case actionsType.DONATIONS_ERROR:
      return {
        ...state,
        error: payload,
        DonatinosLoading: false,
        allDonations: {},
        userDonations: [],
        singleDonations: null,
      };

    case actionsType.ACCOUNT_DELETED:
      let filterDeletedAccountDonations = [];
      let newTotalDonationsAfterAccountDeletion =
        state.allDonations.totalDonations;

      let currentCountedTotalDonationsByUser = state.allDonations.donations.filter(
        (donation) => donation.user.id === payload
      ).length;

      if (state.allDonations && state.allDonations.donations) {
        if (currentCountedTotalDonationsByUser > 0) {
          newTotalDonationsAfterAccountDeletion =
            state.allDonations.totalDonations -
            currentCountedTotalDonationsByUser;
        }

        if (state.allDonations.donations.length > 0) {
          filterDeletedAccountDonations = state.allDonations.donations.filter(
            (donation) => donation.user.id !== payload
          );
        }
      } else {
        filterDeletedAccountDonations = state.allDonations.donations;
      }
      return {
        ...state,
        allDonations: {
          totalDonations: newTotalDonationsAfterAccountDeletion,
          donations: filterDeletedAccountDonations,
        },
      };

    default:
      return state;
  }
}
