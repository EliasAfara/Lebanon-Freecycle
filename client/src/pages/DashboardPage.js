import React from 'react';
import Donations from '../components/Forms/Donations';
import Requests from '../components/Forms/Requests';
import Tabs from '../components/Tabs/NavTabs';

const DashboardPage = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1000px' }}>
      <Tabs
        firstTab='Donate'
        firstKey='Donations'
        firstComponent={<Donations />}
        secondTab='Request'
        secondKey='Requests'
        secondComponent={<Requests />}
        size='large'
        border={true}
        animated={false}
      />
    </div>
  );
};

export default DashboardPage;
