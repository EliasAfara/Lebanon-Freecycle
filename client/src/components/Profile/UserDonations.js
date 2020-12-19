import React from 'react';
import FilterBar from '../FilterBar/FilterBar';

const UserDonations = ({ userDonations }) => {
  return (
    <>
      <FilterBar />
      {userDonations}
    </>
  );
};

export default UserDonations;
