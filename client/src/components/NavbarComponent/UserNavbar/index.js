import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
// Icons
import { GiLifeSupport } from 'react-icons/gi';
import { GiNestedHearts } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { IoMdSettings } from 'react-icons/io';
import { RiHeartAddFill } from 'react-icons/ri';

// Styled Components
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
  DropdownDivider,
  DropdownList,
  DropdownItem,
  DropdownArrow,
  DropdownItemIcon,
  SettingIconDiv,
  DropdownListContainer,
  DropdownListWrapper,
} from './UserNavbarElements';

const UserNavbar = ({ auth: { user }, logout }) => {
  const node = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside component click
      return;
    }
    // outside component click
    setOpenMenu(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick); // left click

    return () => {
      // clean up
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleLogout = () => {
    setOpenMenu(!openMenu);
    logout();
  };

  const DropdownMenu = () => (
    <DropdownList>
      <DropdownListContainer>
        <DropdownArrow />
        <DropdownListWrapper>
          <Link
            to={`/profile/${user && user.username}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <DropdownItem>
              <span style={{ textAlign: 'center', width: '100%' }}>
                Signed in as <strong>{user && user.username}</strong>
              </span>
            </DropdownItem>
          </Link>

          <DropdownDivider />

          <Link
            to={`/profile/${user && user.username}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <DropdownItem>
              <DropdownItemIcon>
                <CgProfile />
              </DropdownItemIcon>
              Profile
            </DropdownItem>
          </Link>

          <Link
            to='/setting/edit-profile'
            onClick={() => setOpenMenu(!openMenu)}
          >
            <DropdownItem>
              <DropdownItemIcon>
                <IoMdSettings />
              </DropdownItemIcon>
              Setting
            </DropdownItem>
          </Link>

          <DropdownDivider />

          <Link to='/login' onClick={handleLogout}>
            <DropdownItem>Logout</DropdownItem>
          </Link>
        </DropdownListWrapper>
      </DropdownListContainer>
    </DropdownList>
  );

  const SettingPopUpFunction = () => {
    // Pop up which will display setting options (Change password / logout)
    // Pop up similar to instagram popup
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='#!'>LFC</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinkRoute to='/dashboard'>Dashboard</NavLinkRoute>
            </NavItem>
            <NavItem>
              <NavLinkRoute to='/donations'>Donations</NavLinkRoute>
            </NavItem>
            <NavItem>
              <NavLinkRoute to='/requests'>Requests</NavLinkRoute>
            </NavItem>
          </NavMenu>
          <IconContainer ref={node}>
            <UserIcon
              src={user && user.avatar}
              alt={user && user.fullname}
              draggable='false'
              onClick={() => setOpenMenu(!openMenu)}
            />

            {openMenu && <DropdownMenu />}
          </IconContainer>
          <SettingIconDiv>
            <span onClick={SettingPopUpFunction} style={{ cursor: 'pointer' }}>
              <IoMdSettings />
            </span>
          </SettingIconDiv>
        </NavbarContainer>
      </Nav>

      <BottomNav>
        <BottomNavMenu>
          <BottomNavItem>
            <BottomNavLinkRoute to='/dashboard'>
              <BottomNavIcon>
                <RiHeartAddFill />
              </BottomNavIcon>
              <BottomNavLinkName>Dashboard</BottomNavLinkName>
            </BottomNavLinkRoute>
          </BottomNavItem>

          <BottomNavItem>
            <BottomNavLinkRoute to='/donations'>
              <BottomNavIcon>
                <GiNestedHearts />
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
            <BottomNavLinkRoute to={`/profile/${user && user.username}`}>
              <BottomNavIcon>
                <UserIcon
                  src={user && user.avatar}
                  alt={user && user.username}
                  draggable='false'
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
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(UserNavbar);
