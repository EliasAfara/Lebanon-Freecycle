import React from 'react';
import UserDonations from './UserDonations';

import Tabs from '../Tabs/NavTabs';
//import UserRequests from './UserRequests';

const ProfileBottom = () => {
  return (
    <>
      <Tabs
        firstTab='Donations'
        secondTab='Requests'
        firstComponent={<UserDonations />}
        size='large'
      />
    </>
  );
};

export default ProfileBottom;
