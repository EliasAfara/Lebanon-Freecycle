import React from 'react';
import FilterBar from '../FilterBar/FilterBar';

const UserDonations = ({ AvailableDonations, CompletedDonations }) => {
  return (
    <>
      <FilterBar />
      {AvailableDonations}
      {CompletedDonations}
    </>
  );
};

export default UserDonations;
