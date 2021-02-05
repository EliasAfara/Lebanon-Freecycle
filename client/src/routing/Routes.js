import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Alert from '../components/layout/Alert';
import Toast from '../components/layout/Toast';

// Forms
import Login from '../components/Forms/Login';
import Register from '../components/Forms/Register';
import EditRequest from '../components/Forms/EditRequest';
import EditDonation from '../components/Forms/EditDonation';
import EditProfile from '../components/Forms/EditProfile';
import ChangePassword from '../components/Forms/ChangePassword';

// Public Pages
import Profile from '../pages/Profile';
import ErrorPage from '../pages/ErrorPage';
import RequestsPage from '../pages/RequestsPage';
import DonationsPage from '../pages/DonationsPage';
import ViewDonation from '../pages/ViewDonation';
import ViewRequest from '../pages/ViewRequest';

// Private Pages
import DashboardPage from '../pages/DashboardPage';

const Routes = () => {
  return (
    <>
      <section className='container'>
        <Alert />
        <Toast />
        <Switch>
          {/* Public */}

          <Route exact path='/donations' component={DonationsPage} />
          <Route exact path='/donation/:id' component={ViewDonation} />

          <Route exact path='/requests' component={RequestsPage} />
          <Route exact path='/request/:id' component={ViewRequest} />

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
      </section>
    </>
  );
};

export default Routes;
