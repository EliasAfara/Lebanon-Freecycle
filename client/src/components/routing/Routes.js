import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import PageShell from '../../utils/PageShell';

import Alert from '../layout/Alert';
import PrivateRoute from './PrivateRoute';
// Pages
import Login from '../auth/Login';
import Register from '../auth/Register';
import Profile from '../../pages/Profile';
import FAQPage from '../../pages/FAQPage';
import AboutPage from '../../pages/AboutPage';
import ErrorPage from '../../pages/ErrorPage';
import RequestsPage from '../../pages/RequestsPage';
import ContactUsPage from '../../pages/ContactUsPage';
import DonationsPage from '../../pages/DonationsPage';
import DashboardPage from '../../pages/DashboardPage';

// To Be Created
const ViewDonation = ''; // Single Donation Component
const ViewRequest = ''; // Single Request Component

const EditProfile = ''; // Component which will contain the form to update user profile
const EditDonation = ''; // Component used to edit a donation according to the passed ID
const EditRequest = ''; // Component used to edit a request according to the passed ID

const Routes = () => {
  return (
    <>
      <section className='container'>
        <Alert />
        <Switch>
          {/* Public */}
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/faq' component={FAQPage} />

          <Route exact path='/donations' component={DonationsPage} />
          <Route exact path='/donation/:id' component={ViewDonation} />

          <Route exact path='/requests' component={RequestsPage} />
          <Route exact path='/request/:id' component={ViewRequest} />

          <Route exact path='/contact-us' component={ContactUsPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          <Route exact path='/profile/:username' component={Profile} />

          {/* Private */}
          <PrivateRoute exact path='/dashboard' component={DashboardPage} />

          {/* Change to Private Later */}
          <Route exact path='/edit-profile' component={EditProfile} />

          {/* Change to Private Later */}
          <Route exact path='/edit-donation/:id' component={EditDonation} />

          {/* Change to Private Later */}
          <Route exact path='/edit-request/:id' component={EditRequest} />

          {/* Error 404 - Not Found */}
          <Route path='*' component={ErrorPage} />
        </Switch>
      </section>
    </>
  );
};

export default Routes;
