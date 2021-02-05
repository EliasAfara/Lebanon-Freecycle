import * as actionsType from '../actions/types';

const initialState = {
  donationsFilters: {
    currentStatusFilter: '',
    currentSelectedStatus: '',

    currentCategoryFilter: '',
    currentSelectedCategory: '',

    currentLocationFilter: '',
    currentSelectedLocation: '',
  },
  requestsFilters: {
    currentStatusFilter: '',
    currentSelectedStatus: '',

    currentCategoryFilter: '',
    currentSelectedCategory: '',
  },
};

export default function filters(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionsType.DONATION_FILTER_LOCATION:
      return {
        ...state,
        donationsFilters: {
          ...state.donationsFilters,
          currentSelectedLocation: payload.locationName,
          currentLocationFilter: payload.locationQuery,
        },
      };
    case actionsType.DONATION_FILTER_CATEGORY:
      return {
        ...state,
        donationsFilters: {
          ...state.donationsFilters,
          currentCategoryFilter: payload.CategoryQuery,
          currentSelectedCategory: payload.CategoryName,
        },
      };
    case actionsType.DONATION_FILTER_STATUS:
      return {
        ...state,
        donationsFilters: {
          ...state.donationsFilters,
          currentStatusFilter: payload.StatusQuery,
          currentSelectedStatus: payload.StatusName,
        },
      };

    case actionsType.REQUEST_FILTER_CATEGORY:
      return {
        ...state,
        requestsFilters: {
          ...state.requestsFilters,
          currentCategoryFilter: payload.CategoryQuery,
          currentSelectedCategory: payload.CategoryName,
        },
      };

    case actionsType.REQUEST_FILTER_STATUS:
      return {
        ...state,
        requestsFilters: {
          ...state.requestsFilters,
          currentStatusFilter: payload.StatusQuery,
          currentSelectedStatus: payload.StatusName,
        },
      };

    default:
      return state;
  }
}
