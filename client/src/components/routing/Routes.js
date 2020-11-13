import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage';
import ContactUsPage from '../../pages/ContactUsPage';
import DonationsPage from '../../pages/DonationsPage';
import ErrorPage from '../../pages/ErrorPage';
import FAQPage from '../../pages/FAQPage';
import RequestsPage from '../../pages/RequestsPage';
import PageShell from '../../utils/PageShell';
import Login from '../auth/Login';
import Register from '../auth/Register';

const Routes = () => {
  return (
    <>
      <>
        <Switch>
          <Route exact path='/donations' component={PageShell(DonationsPage)} />

          <Route exact path='/requests' component={PageShell(RequestsPage)} />

          <Route exact path='/about' component={PageShell(AboutPage)} />
          <Route exact path='/login' component={PageShell(Login)} />

          <Route exact path='/register' component={PageShell(Register)} />

          <Route exact path='/faq' component={PageShell(FAQPage)} />

          <Route
            exact
            path='/contact-us'
            component={PageShell(ContactUsPage)}
          />

          <Route path='*' component={ErrorPage} />
        </Switch>
      </>
      <section className='container'></section>
    </>
  );
};

export default Routes;
