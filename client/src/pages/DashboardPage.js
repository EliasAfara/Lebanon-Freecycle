import React from 'react';
//import PropTypes from 'prop-types';
import DonationsForm from '../components/DashboardForms/DonationsForm';
import RequestsForm from '../components/DashboardForms/RequestsForm';
import Tabs from '../components/Tabs/NavTabs';

const DashboardPage = (props) => {
  return (
    <>
      <Tabs
        firstTab='Donations Form'
        firstComponent={<DonationsForm />}
        secondTab='Requests Form'
        secondComponent={<RequestsForm />}
        size='large'
      />
    </>
  );
};

//DashboardPage.propTypes = {};

export default DashboardPage;
