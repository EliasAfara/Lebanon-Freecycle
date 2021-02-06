import * as actionsType from '../actions/types';

const initialState = {
  donationsPagination: {
    currentPageQuery: '',
    currentSelectedPage: 1,
  },
  requestsPagination: {
    currentPageQuery: '',
    currentSelectedPage: 1,
  },
};

export default function pagination(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionsType.DONATION_PAGINATION:
      return {
        ...state,
        donationsPagination: {
          ...state.donationsPagination,
          currentPageQuery: payload.pageQuery,
          currentSelectedPage: payload.pageNumber,
        },
      };
    case actionsType.REQUEST_PAGINATION:
      return {
        ...state,
        requestsPagination: {
          ...state.requestsPagination,
          currentPageQuery: payload.pageQuery,
          currentSelectedPage: payload.pageNumber,
        },
      };

    default:
      return state;
  }
}
