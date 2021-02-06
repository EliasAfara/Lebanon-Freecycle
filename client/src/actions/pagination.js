import { DONATION_PAGINATION, REQUEST_PAGINATION } from './types';

export const ChangeDonationsPage = (pageNumber, pageQuery) => (dispatch) => {
  dispatch({
    type: DONATION_PAGINATION,
    payload: { pageNumber, pageQuery },
  });
};

export const ChangeRequestsPage = (pageNumber, pageQuery) => (dispatch) => {
  console.log(pageNumber, pageQuery);
  dispatch({
    type: REQUEST_PAGINATION,
    payload: {
      pageNumber,
      pageQuery,
    },
  });
};
