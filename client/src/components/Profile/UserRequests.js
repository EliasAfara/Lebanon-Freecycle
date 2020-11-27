import React from 'react';
import Tabs from '../Tabs/NavTabs';

const UserRequests = ({ AvailableRequests, CompletedRequests }) => {
  return (
    <Tabs
      firstTab='Available'
      secondTab='Completed'
      firstComponent={AvailableRequests}
      secondComponent={CompletedRequests}
    />
  );
};

export default UserRequests;
