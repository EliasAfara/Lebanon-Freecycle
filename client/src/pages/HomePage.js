import React from 'react';
import Footer from '../components/layout/Footer';
import HowItWorks from '../components/layout/HowItWorks';
import Landing from '../components/layout/Landing';

const HomePage = () => {
  return (
    <>
      <div>
        <Landing />
        <hr className='my-16' />
        <HowItWorks />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
