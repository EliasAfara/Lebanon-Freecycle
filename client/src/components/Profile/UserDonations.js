import React from 'react';
import Tabs from '../Tabs/NavTabs';
import { BottomTabBorder } from './ProfileElements';

const UserDonations = ({ AvailableDonations, CompletedDonations }) => {
  return (
    <BottomTabBorder>
      <Tabs
        firstTab='Available'
        secondTab='Completed'
        firstComponent={AvailableDonations}
        secondComponent={CompletedDonations}
      />
    </BottomTabBorder>
  );
};

export default UserDonations;
