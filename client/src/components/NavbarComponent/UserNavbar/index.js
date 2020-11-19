import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

import { GiLifeSupport } from 'react-icons/gi';

import { BsFillGiftFill } from 'react-icons/bs';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinkRoute,
  IconContainer,
  UserIcon,
  BottomNav,
  BottomNavMenu,
  BottomNavLinkRoute,
  BottomNavIcon,
  BottomNavItem,
  BottomNavLinkName,
} from './UserNavbarElements';

const toggleUserIcon = () => {};

const UserNavbar = ({ auth: { user } }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='#!'>LFC</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinkRoute to='/donations'>Donations</NavLinkRoute>
            </NavItem>
            <NavItem>
              <NavLinkRoute to='/requests'>Requests</NavLinkRoute>
            </NavItem>
          </NavMenu>
          <IconContainer>
            <UserIcon
              src={user && user.avatar}
              alt='Avatar'
              onClick={toggleUserIcon}
            />
          </IconContainer>
        </NavbarContainer>
      </Nav>

      <BottomNav>
        <BottomNavMenu>
          <BottomNavItem>
            <BottomNavLinkRoute to='/donations'>
              <BottomNavIcon>
                <BsFillGiftFill />
              </BottomNavIcon>
              <BottomNavLinkName>Donations</BottomNavLinkName>
            </BottomNavLinkRoute>
          </BottomNavItem>

          <BottomNavItem>
            <BottomNavLinkRoute to='/requests'>
              <BottomNavIcon>
                <GiLifeSupport />
              </BottomNavIcon>
              <BottomNavLinkName>Requests</BottomNavLinkName>
            </BottomNavLinkRoute>
          </BottomNavItem>

          <BottomNavItem>
            <BottomNavLinkRoute to=''>
              <BottomNavIcon>
                <UserIcon
                  src={user && user.avatar}
                  alt='Avatar'
                  onClick={toggleUserIcon}
                />
              </BottomNavIcon>

              <BottomNavLinkName>Profile</BottomNavLinkName>
            </BottomNavLinkRoute>
          </BottomNavItem>
        </BottomNavMenu>
      </BottomNav>
    </>
  );
};

UserNavbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(UserNavbar);
