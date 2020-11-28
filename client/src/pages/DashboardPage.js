import React from 'react';
//import PropTypes from 'prop-types';
import DonationsForm from '../components/DashboardForms/DonationsForm';
import RequestsForm from '../components/DashboardForms/RequestsForm';
import Tabs from '../components/Tabs/NavTabs';

const DashboardPage = (props) => {
  return (
    <>
      <h1>This Page will display Donations & Requests Forms</h1>
      <hr />
      <Tabs
        firstTab='Donations Forms'
        firstComponent={<DonationsForm />}
        secondTab='Requests Forms'
        secondComponent={<RequestsForm />}
        size='large'
      />
    </>
  );
};

//DashboardPage.propTypes = {};

export default DashboardPage;
