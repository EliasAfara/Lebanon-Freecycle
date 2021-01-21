import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';

// Redux
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
// Icons
import { GiLifeSupport, GiNestedHearts } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { IoMdSettings } from 'react-icons/io';
import { RiHeartAddFill, RiLockPasswordFill } from 'react-icons/ri';
import { FaUserEdit } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import * as S from './styles';
import LogoSVG from '../SVGComponents/LogoSVG';
import Switch from 'react-switch';
import { moonIcon, sunIcon } from '../../shared/ThemeIcons';

const AuthUserNavbar = ({ auth: { user }, logout, theme, toggleTheme }) => {
  const node = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  //Setting bar
  const [visible, setVisible] = useState(false);

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
    <S.DropdownList>
      <S.DropdownListContainer>
        <S.DropdownArrow />
        <S.DropdownListWrapper>
          <Link
            to={`/profile/${user && user.username}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <S.DropdownItem>
              <span style={{ textAlign: 'center', width: '100%' }}>
                Signed in as <strong>{user && user.username}</strong>
              </span>
            </S.DropdownItem>
          </Link>

          <hr />

          <Link
            to={`/profile/${user && user.username}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <S.DropdownItem>
              <S.DropdownItemIcon>
                <CgProfile />
              </S.DropdownItemIcon>
              Profile
            </S.DropdownItem>
          </Link>

          <S.DropdownItem onClick={toggleSetting} style={{ cursor: 'pointer' }}>
            <S.DropdownItemIcon>
              <IoMdSettings />
            </S.DropdownItemIcon>
            Setting
          </S.DropdownItem>

          <hr />

          <Link to='/login' onClick={handleLogout}>
            <S.DropdownItem>Logout</S.DropdownItem>
          </Link>
        </S.DropdownListWrapper>
      </S.DropdownListContainer>
    </S.DropdownList>
  );

  return (
    <>
      <S.Nav>
        <S.NavbarContainer>
          <S.NavLogo>
            <LogoSVG />
          </S.NavLogo>
          <S.NavMenu>
            <S.NavItem>
              <S.NavLinkRoute to='/dashboard'>Dashboard</S.NavLinkRoute>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinkRoute to='/donations'>Donations</S.NavLinkRoute>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinkRoute to='/requests'>Requests</S.NavLinkRoute>
            </S.NavItem>
          </S.NavMenu>
          <S.IconContainer ref={node}>
            <S.UserIcon
              src={user && user.avatar}
              alt={user && user.fullname}
              width='30'
              height='30'
              draggable='false'
              onClick={() => setOpenMenu(!openMenu)}
            />
            {openMenu && <DropdownMenu />}
          </S.IconContainer>

          <S.SettingIconDiv>
            <span
              onClick={() => setVisible(true)}
              style={{ cursor: 'pointer' }}
            >
              <IoMdSettings />
            </span>
          </S.SettingIconDiv>
        </S.NavbarContainer>
      </S.Nav>

      {/* Settings Side Drawer */}
      <Drawer
        title='Settings'
        placement='right'
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <S.SettingsList>
          <S.SettingChangeTheme>
            <Switch
              onChange={toggleTheme}
              checked={theme === 'dark'}
              onColor='#222'
              offColor='#8e8e8e'
              checkedIcon={
                <img src={moonIcon} height='28' width='30' alt='moon icon' />
              }
              uncheckedIcon={
                <img src={sunIcon} height='28' width='30' alt='sun icon' />
              }
              boxShadow='0 0 2px 3px #1890fa'
              activeBoxShadow='0 0 2px 3px #1890fz'
            />
          </S.SettingChangeTheme>

          <S.SettingsItemLink
            to='/setting/edit-profile'
            title='Edit Profile'
            onClick={() => setVisible(false)}
          >
            <S.SettingsItemIcon>
              <FaUserEdit />
            </S.SettingsItemIcon>
            Edit Profile
          </S.SettingsItemLink>

          <S.SettingsItemLink
            to='/setting/change-password'
            title='Change Password'
            onClick={() => setVisible(false)}
          >
            <S.SettingsItemIcon>
              <RiLockPasswordFill />
            </S.SettingsItemIcon>
            Change Password
          </S.SettingsItemLink>
        </S.SettingsList>

        <hr className='styled-hr' />

        <S.SettingsList>
          <S.SettingsItemLink to='/login' onClick={handleLogout}>
            <S.SettingsItemIcon>
              <FiLogOut />
            </S.SettingsItemIcon>
            Logout
          </S.SettingsItemLink>
        </S.SettingsList>
      </Drawer>

      <S.BottomNav>
        <S.BottomNavMenu>
          <S.BottomNavItem>
            <S.BottomNavLinkRoute to='/dashboard'>
              <S.BottomNavIcon>
                <RiHeartAddFill />
              </S.BottomNavIcon>
              <S.BottomNavLinkName>Dashboard</S.BottomNavLinkName>
            </S.BottomNavLinkRoute>
          </S.BottomNavItem>

          <S.BottomNavItem>
            <S.BottomNavLinkRoute to='/donations'>
              <S.BottomNavIcon>
                <GiNestedHearts />
              </S.BottomNavIcon>
              <S.BottomNavLinkName>Donations</S.BottomNavLinkName>
            </S.BottomNavLinkRoute>
          </S.BottomNavItem>

          <S.BottomNavItem>
            <S.BottomNavLinkRoute to='/requests'>
              <S.BottomNavIcon>
                <GiLifeSupport />
              </S.BottomNavIcon>
              <S.BottomNavLinkName>Requests</S.BottomNavLinkName>
            </S.BottomNavLinkRoute>
          </S.BottomNavItem>

          <S.BottomNavItem>
            <S.BottomNavLinkRoute to={`/profile/${user && user.username}`}>
              <S.BottomNavIcon>
                <S.UserIcon
                  src={user && user.avatar}
                  alt={user && user.username}
                  width='30'
                  height='30'
                  loading='lazy'
                  draggable='false'
                />
              </S.BottomNavIcon>

              <S.BottomNavLinkName>Profile</S.BottomNavLinkName>
            </S.BottomNavLinkRoute>
          </S.BottomNavItem>
        </S.BottomNavMenu>
      </S.BottomNav>
    </>
  );
};

AuthUserNavbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(AuthUserNavbar);
