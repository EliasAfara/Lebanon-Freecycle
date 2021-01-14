import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import { Modal } from 'antd';

// Redux
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
// Icons
import { GiLifeSupport, GiNestedHearts } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { IoMdSettings } from 'react-icons/io';
import {
  RiHeartAddFill,
  RiLockPasswordFill,
  RiPaletteFill,
} from 'react-icons/ri';
import { FaUserEdit } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

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
  DropdownList,
  DropdownItem,
  DropdownArrow,
  DropdownItemIcon,
  SettingIconDiv,
  DropdownListContainer,
  DropdownListWrapper,
  SettingsList,
  SettingsItemIcon,
  SettingsItemLink,
  SettingItem,
  ThemesContainer,
  LightThemeToggle,
  DarkThemeToggle,
  SolarizedThemeToggle,
  SolarizedDarkThemeToggle,
} from './UserNavbarElements';
import LogoSVG from '../../SVGComponents/LogoSVG';

const UserNavbar = ({ auth: { user }, logout }) => {
  const node = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  //Setting bar
  const [visible, setVisible] = useState(false);

  //Change Theme Modal
  const [isThemesModalVisible, setIsThemesModalVisible] = useState(false);
  const showChangeThemeModal = () => {
    setIsThemesModalVisible(true);
    setVisible(false);
  };

  const handleCancel = () => {
    setIsThemesModalVisible(false);
  };

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

  const toggleSetting = () => {
    setOpenMenu(!openMenu);
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleLogout = () => {
    setOpenMenu(!openMenu);
    setVisible(false);
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

          <hr />

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

          <DropdownItem onClick={toggleSetting} style={{ cursor: 'pointer' }}>
            <DropdownItemIcon>
              <IoMdSettings />
            </DropdownItemIcon>
            Setting
          </DropdownItem>

          <hr />

          <Link to='/login' onClick={handleLogout}>
            <DropdownItem>Logout</DropdownItem>
          </Link>
        </DropdownListWrapper>
      </DropdownListContainer>
    </DropdownList>
  );

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <LogoSVG />
          </NavLogo>
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
              width='30'
              height='30'
              draggable='false'
              onClick={() => setOpenMenu(!openMenu)}
            />
            {openMenu && <DropdownMenu />}
          </IconContainer>
          <SettingIconDiv>
            <span
              onClick={() => setVisible(true)}
              style={{ cursor: 'pointer' }}
            >
              <IoMdSettings />
            </span>
          </SettingIconDiv>
        </NavbarContainer>
      </Nav>

      {/* Settings Side Drawer */}
      <Drawer
        title='Settings'
        placement='right'
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <SettingsList>
          <SettingsItemLink
            to='/setting/edit-profile'
            title='Edit Profile'
            onClick={() => setVisible(false)}
          >
            <SettingsItemIcon>
              <FaUserEdit />
            </SettingsItemIcon>
            Edit Profile
          </SettingsItemLink>

          <SettingsItemLink
            to='/setting/change-password'
            title='Change Password'
            onClick={() => setVisible(false)}
          >
            <SettingsItemIcon>
              <RiLockPasswordFill />
            </SettingsItemIcon>
            Change Password
          </SettingsItemLink>

          <SettingItem title='Change Theme' onClick={showChangeThemeModal}>
            <SettingsItemIcon>
              <RiPaletteFill />
            </SettingsItemIcon>
            Change Theme
          </SettingItem>

          <Modal
            title='Change Theme'
            visible={isThemesModalVisible}
            onCancel={handleCancel}
            footer={null}
            bodyStyle={{ padding: '0', height: '60px' }}
          >
            <ThemesContainer>
              <LightThemeToggle onClick={handleCancel}>Light</LightThemeToggle>
              <DarkThemeToggle onClick={handleCancel}>Dark</DarkThemeToggle>
              <SolarizedThemeToggle onClick={handleCancel}>
                Solarized
              </SolarizedThemeToggle>
              <SolarizedDarkThemeToggle onClick={handleCancel}>
                Solarized Dark
              </SolarizedDarkThemeToggle>
            </ThemesContainer>
          </Modal>
        </SettingsList>
        <hr className='styled-hr' />
        <SettingsList>
          <SettingsItemLink to='/login' onClick={handleLogout}>
            <SettingsItemIcon>
              <FiLogOut />
            </SettingsItemIcon>
            Logout
          </SettingsItemLink>
        </SettingsList>
      </Drawer>

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
                  width='30'
                  height='30'
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
