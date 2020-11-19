import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactUsPage from '../../pages/ContactUsPage';
import DonationsPage from '../../pages/DonationsPage';
import RequestsPage from '../../pages/RequestsPage';
import AboutPage from '../../pages/AboutPage';
import ErrorPage from '../../pages/ErrorPage';
import PageShell from '../../utils/PageShell';
import FAQPage from '../../pages/FAQPage';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';

import PrivateRoute from './PrivateRoute';

import Profile from '../Private/profile/Profile';

const Donation = ''; // Single Donation Component
const Request = ''; // Single Request Component

const completedDonations = ''; // Component that displays all completed donations
const completedRequests = ''; // Component that displays all completed requests

const CreateProfile = ''; // Component that displays the form for editing & creating a profile

const SubmitDonation = ''; // Component used to submit donations
const EditDonation = ''; // Component used to edit a donation according to the passed ID
const SubmitRequest = ''; // Component used to submit requests
const EditRequest = ''; // Component used to edit a request according to the passed ID

const Routes = () => {
  return (
    <>
      <section className='container'>
        <Alert />
        <Switch>
          {/* Public */}
          <Route exact path='/about' component={PageShell(AboutPage)} />
          <Route exact path='/faq' component={PageShell(FAQPage)} />

          <Route exact path='/donations' component={PageShell(DonationsPage)} />
          <Route exact path='/donation/:id' component={Donation} />
          <Route
            exact
            path='/completed-donations'
            component={completedDonations}
          />
          <Route exact path='/requests' component={PageShell(RequestsPage)} />
          <Route exact path='/request/:id' component={Request} />
          <Route
            exact
            path='/completed-requests'
            component={completedRequests}
          />

          <Route
            exact
            path='/contact-us'
            component={PageShell(ContactUsPage)}
          />
          <Route exact path='/login' component={PageShell(Login)} />
          <Route exact path='/register' component={PageShell(Register)} />

          <Route exact path='/profile/:username' component={Profile} />

          {/* Private */}
          <PrivateRoute
            exact
            path='/create-profile'
            component={CreateProfile}
          />
          <PrivateRoute exact path='/edit-profile' component={CreateProfile} />

          <PrivateRoute
            exact
            path='/submit-donation'
            component={SubmitDonation}
          />
          <PrivateRoute
            exact
            path='/edit-donation/:id'
            component={EditDonation}
          />

          <PrivateRoute
            exact
            path='/submit-request'
            component={SubmitRequest}
          />
          <PrivateRoute
            exact
            path='/edit-request/:id'
            component={EditRequest}
          />

          {/* Error 404 - Not Found */}
          <Route path='*' component={ErrorPage} />
        </Switch>
      </section>
    </>
  );
};

export default Routes;
