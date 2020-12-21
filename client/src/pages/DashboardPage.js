import React from 'react';
//import PropTypes from 'prop-types';
import DonationsForm from '../components/DashboardForms/DonationsForm';
import RequestsForm from '../components/DashboardForms/RequestsForm';
import Tabs from '../components/Tabs/NavTabs';

const DashboardPage = (props) => {
  return (
    <div style={{ width: '100%', maxWidth: '1000px' }}>
      <Tabs
        firstTab='Donations Form'
        firstKey='Donations'
        firstComponent={<DonationsForm />}
        secondTab='Requests Form'
        secondKey='Requests'
        secondComponent={<RequestsForm />}
        size='large'
        border={true}
        animated={false}
      />
    </div>
  );
};

//DashboardPage.propTypes = {};

export default DashboardPage;
