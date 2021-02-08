import * as actionsType from '../actions/types';

const initialState = {
  donationsSearch: {
    currentSearchInput: '',
    currentSearchQuery: '',
  },
  requestsSearch: {
    currentSearchInput: '',
    currentSearchQuery: '',
  },
};

export default function search(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionsType.DONATION_PARTIAL_SEARCH:
      return {
        ...state,
        donationsSearch: {
          currentSearchInput: payload.searchInput,
          currentSearchQuery: payload.searchQuery,
        },
      };
    case actionsType.REQUEST_PARTIAL_SEARCH:
      return {
        ...state,
        requestsSearch: {
          currentSearchInput: payload.searchInput,
          currentSearchQuery: payload.searchQuery,
        },
      };

    default:
      return state;
  }
}
