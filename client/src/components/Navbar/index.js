import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Guest
import GuestNavbar from './GuestNavbar';

// User
import AuthUserNavbar from './AuthUserNavbar';

const NavbarComponent = ({
  auth: { isAuthenticated, authLoading },
  theme,
  themeToggler,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!authLoading && (
        <>
          {isAuthenticated ? (
            <AuthUserNavbar theme={theme} toggleTheme={themeToggler} />
          ) : (
            <GuestNavbar
              isOpen={isOpen}
              toggleNavBar={toggleNavBar}
              theme={theme}
              toggleTheme={themeToggler}
            />
          )}
        </>
      )}
    </>
  );
};

NavbarComponent.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(NavbarComponent);
