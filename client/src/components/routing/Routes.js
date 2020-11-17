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

const Routes = () => {
  return (
    <>
      <>
        <Alert />
        <Switch>
          <Route exact path='/donations' component={PageShell(DonationsPage)} />
          <Route exact path='/requests' component={PageShell(RequestsPage)} />
          <Route exact path='/about' component={PageShell(AboutPage)} />
          <Route exact path='/faq' component={PageShell(FAQPage)} />
          <Route
            exact
            path='/contact-us'
            component={PageShell(ContactUsPage)}
          />

          <Route exact path='/login' component={PageShell(Login)} />
          <Route exact path='/register' component={PageShell(Register)} />

          <Route path='*' component={ErrorPage} />
        </Switch>
      </>
    </>
  );
};

export default Routes;
