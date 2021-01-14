import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Alert from '../components/layout/Alert';
import Toast from '../components/layout/Toast';
import Spinner from '../components/Spinner/Spinner';
import PrivateRoute from './PrivateRoute';

// Pages

const Login = lazy(() => import('../components/auth/Login'));
const Register = lazy(() => import('../components/auth/Register'));
const Profile = lazy(() => import('../pages/Profile'));
const FAQPage = lazy(() => import('../pages/FAQPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const RequestsPage = lazy(() => import('../pages/RequestsPage'));
const ContactUsPage = lazy(() => import('../pages/ContactUsPage'));
const DonationsPage = lazy(() => import('../pages/DonationsPage'));

const ViewDonation = lazy(() => import('../pages/ViewDonation'));
const ViewRequest = lazy(() => import('../pages/ViewRequest'));

const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const EditProfile = lazy(() => import('../components/Setting/EditProfile'));
const ChangePassword = lazy(() =>
  import('../components/Setting/ChangePassword')
);
const EditRequest = lazy(() => import('../pages/EditRequest'));
const EditDonation = lazy(() => import('../pages/EditDonation'));

const Routes = () => {
  return (
    <>
      <section className='container'>
        <Alert />
        <Toast />
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </section>
    </>
  );
};

export default Routes;
