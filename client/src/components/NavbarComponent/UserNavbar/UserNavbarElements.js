import styled from 'styled-components';
import { NavLink as LinkRouter } from 'react-router-dom';
import { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1030;
  height: 54px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
  font-size: 1rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 768px) {
    height: 54px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  z-index: 1;
  padding: 0 24px;
`;
export const NavLogo = styled.div`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  height: 100%;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 100%;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%;
`;

export const NavLinkRoute = styled(LinkRouter)`
  display: flex;
  align-items: center;
  height: 100%;
  color: #222;
  font-weight: 400;
  margin: 0 2rem 0 2rem;
  text-decoration: none;
  background-size: 0% 2px;
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(currentColor, currentColor);
  transition: background-size 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0.3s;
  cursor: pointer;

  &.active {
    color: #1890ff;
    background-size: 100% 2px;
    font-weight: 600;
  }

  &:hover:not(.active) {
    color: #76777a;
    background-size: 100% 2px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserIcon = styled.img`
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0;
  cursor: pointer;
`;
export const SettingIconDiv = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #262626;
    font-size: 25px;
  }
`;

// Bottom Navbar
export const BottomNav = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 1;
    bottom: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export const BottomNavMenu = styled.ul`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #fff;
    border-top: 1px solid #dbdbdb;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    height: 100%;
    width: 100%;
  }
`;

export const BottomNavItem = styled.li`
  width: 100%;
  text-align: center;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  &:last-child {
    border-right: none;
  }
`;

export const BottomNavLinkRoute = styled(LinkRouter)`
  width: 80%;
  text-decoration: none;

  &:hover div {
    color: #1890ff;
  }

  &.active div {
    color: #1890ff;
  }
`;
export const BottomNavIcon = styled.div`
  color: #222;
  text-align: center;
  font-size: 30px;
  width: 100%;
  height: 100%;
  transition: color 500ms ease-in-out;
`;

export const BottomNavLinkName = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #222;
  transition: color 500ms ease-in-out;

  @media screen and (max-width: 375px) {
    font-size: 12px;
    font-weight: 300;
  }

  @media screen and (max-width: 280px) {
    display: none;
  }
`;

// Dropdown menu

export const DropdownList = styled.div`
  position: absolute;
  top: 50px;
  width: 190px;
  font-size: 14px;
  background: #fff;
  border-radius: 5px;
  transform: translate(-75%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: transform 0.15s ease-out;
`;

export const DropdownListContainer = styled.div`
  opacity: 1;
  transform: translateY(0);
  transform-origin: top center;
  transition: opacity 75ms linear, transform 38ms ease-out;
  box-shadow: 0 0 5px 1px rgba(var(--jb7, 0, 0, 0), 0.0975);
  background: #fff;
  border-radius: 6px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`;

export const DropdownArrow = styled.div`
  position: fixed;
  left: 151px;
  top: -7px;
  bottom: -6px;
  height: 14px;
  z-index: -1;
  width: 14px;
  transform: rotate(45deg);
  background: #fff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: #262626;
  width: 100%;

  &:hover {
    background: #f6f6f6;
  }
`;

export const DropdownItemIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 19px;
  margin-right: 12px;
`;

export const DropdownDivider = styled.div`
  display: block;
  height: 0;
  //margin: 6px 0;
  border-top: 1px solid #ffdf6c;
`;

export const DropdownListWrapper = styled.div`
  background: #fff;
  border-radius: 6px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  width: 100%;
`;

export const SettingsList = styled.div`
  display: grid;
  gap: 20px;
`;

const sharedSettingItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 16px;
  color: #262626;
  cursor: pointer;
`;
const ActiveHover = css`
  &.active {
    border-left: 2px solid #262626;
    font-weight: 600;
  }

  &:hover {
    color: #262626;
    background: #f6f6f6;
  }
`;
export const SettingItem = styled.div`
  ${sharedSettingItemStyle}

  ${ActiveHover}
`;

export const SettingsItemLink = styled(LinkRouter)`
  ${sharedSettingItemStyle}

  ${ActiveHover}
`;

export const SettingsItemIcon = styled.div`
  display: flex;
  margin-right: 20px;
`;

//Themes

const ThemeCircle = css`
  content: ' ';
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  vertical-align: middle;
  margin-top: -3px;
  margin-right: 0.45rem;
`;
const CleanBtn = css`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const ThemesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;
`;
export const LightThemeToggle = styled.button`
  ${CleanBtn}
  display: block;
  width: 50%;
  padding: 0 1rem;
  height: inherit;
  &::before {
    background: #fff;
    border: 2px solid #6db65b;
    ${ThemeCircle}
  }
  &:hover {
    color: #262626;
    background: #f6f6f6;
  }
`;

export const DarkThemeToggle = styled.button`
  ${CleanBtn}
  display: block;
  width: 50%;
  padding: 0 1rem;
  height: inherit;
  &::before {
    background: #222831;
    border: 2px solid #b58900;
    ${ThemeCircle}
  }
  &:hover {
    color: #262626;
    background: #f6f6f6;
  }
`;

export const SolarizedThemeToggle = styled.button`
  ${CleanBtn}
  display: block;
  width: 60%;
  padding: 0 1rem;
  height: inherit;
  &::before {
    background: #fdf6e3;
    border: 2px solid #b58900;
    ${ThemeCircle}
  }
  &:hover {
    color: #262626;
    background: #f6f6f6;
  }
`;

export const SolarizedDarkThemeToggle = styled.button`
  ${CleanBtn}
  display: block;
  width: 70%;
  padding: 0 1rem;
  height: inherit;
  &::before {
    background: #002b36;
    border: 2px solid #b58900;
    ${ThemeCircle}
  }
  &:hover {
    color: #262626;
    background: #f6f6f6;
  }
`;
