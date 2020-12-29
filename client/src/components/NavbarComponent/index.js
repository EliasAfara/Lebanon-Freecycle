import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

// Guest
import Navbar from './Navbar';
import Sidebar from './Sidebar';

// User
import UserNavbar from './UserNavbar';

const NavbarComponent = ({ auth: { isAuthenticated, authLoading } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const guestNavbar = () => {
    return (
      <>
        {isOpen ? (
          <Sidebar isOpen={isOpen} toggleNavBar={toggleNavBar} />
        ) : null}
        <Navbar toggleNavBar={toggleNavBar} />
      </>
    );
  };

  const userNavbar = <UserNavbar />;

  return (
    <>{!authLoading && <>{isAuthenticated ? userNavbar : guestNavbar()}</>}</>
  );
};

NavbarComponent.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(NavbarComponent);
