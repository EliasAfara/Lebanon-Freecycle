import React from 'react';
import { withTheme } from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import LogoSVG from '../SVGComponents/LogoSVG';
import * as S from './styles';
import Switch from 'react-switch';

import { Drawer } from 'antd';
import { moonIcon, sunIcon } from '../../shared/ThemeIcons';

const GuestNavbar = ({ isOpen, toggleNavBar, theme, toggleTheme }) => {
  return (
    <>
      <S.Nav>
        <S.NavbarContainer>
          <S.NavLogo>
            <NavLink to='/'>
              <LogoSVG />
            </NavLink>
          </S.NavLogo>

          <S.NavMenu>
            <S.NavItem>
              <S.NavLinkRoute to='/about'>About</S.NavLinkRoute>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinkRoute to='/donations'>Donations</S.NavLinkRoute>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinkRoute to='/requests'>Requests</S.NavLinkRoute>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinkRoute to='/login'>Login</S.NavLinkRoute>
            </S.NavItem>
          </S.NavMenu>

          <>
            <S.NavThemeToggle>
              <Switch
                onChange={toggleTheme}
                checked={theme === 'dark'}
                onColor='#222'
                onHandleColor='#191C30'
                offColor='#8e8e8e'
                offHandleColor='#fff'
                checkedIcon={
                  <img src={moonIcon} height='28' width='30' alt='moon icon' />
                }
                uncheckedIcon={
                  <img src={sunIcon} height='28' width='30' alt='sun icon' />
                }
              />
            </S.NavThemeToggle>

            <S.NavBtn>
              <S.NavBtnLink to='/register'></S.NavBtnLink>
            </S.NavBtn>

            <S.MobileIcon onClick={toggleNavBar}>
              <FaBars />
            </S.MobileIcon>
          </>

          <>
            <Drawer
              title={<LogoSVG />}
              placement='right'
              closable={true}
              onClose={toggleNavBar}
              visible={isOpen}
            >
              <S.SettingsList>
                <S.SettingChangeTheme>
                  <Switch
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                    onColor='#222'
                    offColor='#8e8e8e'
                    checkedIcon={
                      <img
                        src={moonIcon}
                        height='28'
                        width='30'
                        alt='moon icon'
                      />
                    }
                    uncheckedIcon={
                      <img
                        src={sunIcon}
                        height='28'
                        width='30'
                        alt='sun icon'
                      />
                    }
                    boxShadow='0 0 2px 3px #1890fa'
                    activeBoxShadow='0 0 2px 3px #1890fz'
                  />
                </S.SettingChangeTheme>

                <S.SettingsItemLink
                  to='/about'
                  title='About'
                  onClick={toggleNavBar}
                >
                  About
                </S.SettingsItemLink>

                <S.SettingsItemLink
                  to='/donations'
                  title='Donations'
                  onClick={toggleNavBar}
                >
                  Donations
                </S.SettingsItemLink>

                <S.SettingsItemLink
                  to='/requests'
                  title='Requests'
                  onClick={toggleNavBar}
                >
                  Requests
                </S.SettingsItemLink>

                <S.SettingsItemLink
                  to='/login'
                  title='Login'
                  onClick={toggleNavBar}
                >
                  Login
                </S.SettingsItemLink>
              </S.SettingsList>

              <hr className='styled-hr' />

              <S.SettingsList>
                <S.NavBtnLink
                  to='/register'
                  onClick={toggleNavBar}
                ></S.NavBtnLink>
              </S.SettingsList>
            </Drawer>
          </>
        </S.NavbarContainer>
      </S.Nav>
    </>
  );
};

export default withTheme(GuestNavbar);
