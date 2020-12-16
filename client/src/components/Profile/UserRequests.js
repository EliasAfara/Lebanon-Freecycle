import React from 'react';
import FilterBar from '../FilterBar/FilterBar';

const UserRequests = ({ AvailableRequests, CompletedRequests }) => {
  return (
    <>
      <FilterBar />
      {AvailableRequests}
      {CompletedRequests}
    </>
  );
};

export default UserRequests;
