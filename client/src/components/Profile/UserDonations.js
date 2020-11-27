import React from 'react';
import Tabs from '../Tabs/NavTabs';

const UserDonations = ({ AvailableDonations, CompletedDonations }) => {
  return (
    <Tabs
      firstTab='Available'
      secondTab='Completed'
      firstComponent={AvailableDonations}
      secondComponent={CompletedDonations}
    />
  );
};

export default UserDonations;
