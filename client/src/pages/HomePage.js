import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

import Hero from '../components/layout/Hero';

const HowItWorks = loadable(() => import('../components/layout/HowItWorks'), {
  fallback: <div />,
});
const Footer = loadable(() => import('../components/layout/Footer'), {
  fallback: <div />,
});

const HomePage = ({ isAuthenticated }) => {
  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/donations' />;
  }

  return (
    <div>
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  );
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(HomePage);
