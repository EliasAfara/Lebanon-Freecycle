import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Hero from '../components/layout/Hero';
import HowItWorks from '../components/layout/HowItWorks';
import Footer from '../components/layout/Footer';

const HomePage = ({ isAuthenticated }) => {
  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/donations' />;
  }

  return (
    <>
      <div>
        <Hero />
        <HowItWorks />
        <Footer />
      </div>
    </>
  );
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(HomePage);
