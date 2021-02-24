import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

import Hero from '../components/layout/Hero';
import HeadHelmet from '../utils/HeadHelmet';

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
      <HeadHelmet
        title='Lebanon Freecycle'
        description='Lebanon Freecycle is a web app that is established as a way to purely help citizens of Lebanon to connect with each other and support one another. It contains many features which allow its users to freely interact by donating, requesting donations and support. ❤'
        url='https://www.lebanon-freecycle.live/'
        image='https://res.cloudinary.com/freecyclelebanon/image/upload/v1613940519/lfc_dqjvkj.png'
      />
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
