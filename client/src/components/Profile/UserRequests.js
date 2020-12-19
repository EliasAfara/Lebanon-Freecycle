import React from 'react';
import FilterBar from '../FilterBar/FilterBar';

const UserRequests = ({ userRequests }) => {
  return (
    <>
      <FilterBar />
      {userRequests}
    </>
  );
};

export default UserRequests;
