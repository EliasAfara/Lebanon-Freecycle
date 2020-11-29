import React from 'react';
import Tabs from '../Tabs/NavTabs';

const UserDonations = ({ AvailableDonations, CompletedDonations }) => {
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
        firstComponent={AvailableDonations}
        secondComponent={CompletedDonations}
      />
    </div>
  );
};

export default UserDonations;
