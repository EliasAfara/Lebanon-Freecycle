import {
  REQUEST_FILTER_STATUS,
  REQUEST_FILTER_CATEGORY,
  DONATION_FILTER_LOCATION,
  DONATION_FILTER_CATEGORY,
  DONATION_FILTER_STATUS,
} from './types';

export const FilterDonationLocation = (locationName, locationQuery) => (
  dispatch
) => {
  dispatch({
    type: DONATION_FILTER_LOCATION,
    payload: { locationName, locationQuery },
  });
};

export const FilterDonationCategory = (CategoryName, CategoryQuery) => (
  dispatch
) => {
  console.log(CategoryName, CategoryQuery);
  dispatch({
    type: DONATION_FILTER_CATEGORY,
    payload: {
      CategoryName,
      CategoryQuery,
    },
  });
};

export const FilterDonationStatus = (StatusName, StatusQuery) => (dispatch) => {
  dispatch({
    type: DONATION_FILTER_STATUS,
    payload: { StatusName, StatusQuery },
  });
};

export const FilterRequestCategory = (CategoryName, CategoryQuery) => (
  dispatch
) => {
  dispatch({
    type: REQUEST_FILTER_CATEGORY,
    payload: { CategoryName, CategoryQuery },
  });
};

export const FilterRequestStatus = (StatusName, StatusQuery) => (dispatch) => {
  dispatch({
    type: REQUEST_FILTER_STATUS,
    payload: { StatusName, StatusQuery },
  });
};
