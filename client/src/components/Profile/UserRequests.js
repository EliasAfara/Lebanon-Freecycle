import React from 'react';
import Tabs from '../Tabs/NavTabs';

const UserRequests = ({ AvailableRequests, CompletedRequests }) => {
  return (
    <div
      style={{
        borderRadius: '3px',
        border: '1px solid #f0f0f0',
      }}
    >
      <Tabs
        firstTab='Available'
        secondTab='Completed'
        firstComponent={AvailableRequests}
        secondComponent={CompletedRequests}
      />
    </div>
  );
};

export default UserRequests;
