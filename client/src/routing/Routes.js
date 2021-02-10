import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable, { lazy } from '@loadable/component';

import PrivateRoute from './PrivateRoute';

import Alert from '../components/layout/Alert';
import Toast from '../components/layout/Toast';

// Forms
import Login from '../components/Forms/Login';
import Register from '../components/Forms/Register';

import { Space, Spin } from 'antd';

const DonationsPage = lazy(() => import('../pages/DonationsPage'));
const RequestsPage = lazy(() => import('../pages/RequestsPage'));
const Profile = lazy(() => import('../pages/Profile'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const ViewDonation = lazy(() => import('../pages/ViewDonation'));
const ViewRequest = lazy(() => import('../pages/ViewRequest'));

const EditRequest = lazy(() => import('../components/Forms/EditRequest'));
const EditDonation = lazy(() => import('../components/Forms/EditDonation'));
const EditProfile = lazy(() => import('../components/Forms/EditProfile'));
const ChangePassword = lazy(() => import('../components/Forms/ChangePassword'));
const ErrorPage = loadable(() => import('../pages/ErrorPage'));

const Routes = () => {
  return (
    <>
      <section className='container'>
        <Alert />
        <Toast />
        <Switch>
          {/* Public */}

          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          <Suspense
            fallback={
              <div style={{ textAlign: 'center' }}>
                <Space size='middle'>
                  <Spin size='large' />
                </Space>
              </div>
            }
          >
            <Route exact path='/donations' component={DonationsPage} />
            <Route exact path='/donation/:id' component={ViewDonation} />

            <Route exact path='/requests' component={RequestsPage} />
            <Route exact path='/request/:id' component={ViewRequest} />

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
          </Suspense>

          {/* Error 404 - Not Found */}
          <Route path='*' component={ErrorPage} />
        </Switch>
      </section>
    </>
  );
};

export default Routes;
