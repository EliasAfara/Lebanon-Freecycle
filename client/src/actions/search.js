import { REQUEST_PARTIAL_SEARCH, DONATION_PARTIAL_SEARCH } from './types';

export const DonationsPartialSearch = (searchInput, searchQuery) => (
  dispatch
) => {
  dispatch({
    type: DONATION_PARTIAL_SEARCH,
    payload: { searchInput, searchQuery },
  });
};

export const RequestsPartialSearch = (searchInput, searchQuery) => (
  dispatch
) => {
  // console.log(searchInput, searchQuery);

  dispatch({
    type: REQUEST_PARTIAL_SEARCH,
    payload: { searchInput, searchQuery },
  });
};
