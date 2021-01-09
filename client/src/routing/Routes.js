import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import PageShell from '../../utils/PageShell';

import Alert from '../components/layout/Alert';
import Toast from '../components/layout/Toast';
import PrivateRoute from './PrivateRoute';
// Pages
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Profile from '../pages/Profile';
import FAQPage from '../pages/FAQPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import RequestsPage from '../pages/RequestsPage';
import ContactUsPage from '../pages/ContactUsPage';
import DonationsPage from '../pages/DonationsPage';
import DashboardPage from '../pages/DashboardPage';
import EditProfile from '../components/Setting/EditProfile';
import ChangePassword from '../components/Setting/ChangePassword';
import EditRequest from '../pages/EditRequest';
import ViewRequest from '../pages/ViewRequest';
import ViewDonation from '../pages/ViewDonation';

const EditDonation = ''; // Component used to edit a donation according to the passed ID

const Routes = () => {
  return (
    <>
      <section className='container'>
        <Alert />
        <Toast />

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

          <PrivateRoute
            exact
            path='/setting/edit-profile'
            component={EditProfile}
          />

          <PrivateRoute
            exact
            path='/setting/change-password'
            component={ChangePassword}
          />

          <PrivateRoute
            exact
            path='/edit-donation/:id'
            component={EditDonation}
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
