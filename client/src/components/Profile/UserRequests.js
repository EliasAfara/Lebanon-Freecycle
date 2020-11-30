import React from 'react';
import Tabs from '../Tabs/NavTabs';
import { BottomTabBorder } from './ProfileElements';

const UserRequests = ({ AvailableRequests, CompletedRequests }) => {
  return (
    <BottomTabBorder>
      <Tabs
        firstTab='Available'
        secondTab='Completed'
        firstComponent={AvailableRequests}
        secondComponent={CompletedRequests}
      />
    </BottomTabBorder>
  );
};

export default UserRequests;
