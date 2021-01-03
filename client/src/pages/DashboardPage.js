import React from 'react';
import DonationsForm from '../components/DashboardForms/DonationsForm';
import RequestsForm from '../components/DashboardForms/RequestsForm';
import Tabs from '../components/Tabs/NavTabs';

const DashboardPage = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1000px' }}>
      <Tabs
        firstTab='Submit A Donation'
        firstKey='Donations'
        firstComponent={<DonationsForm />}
        secondTab='Submit A Request'
        secondKey='Requests'
        secondComponent={<RequestsForm />}
        size='large'
        border={true}
        animated={false}
      />
    </div>
  );
};

export default DashboardPage;
