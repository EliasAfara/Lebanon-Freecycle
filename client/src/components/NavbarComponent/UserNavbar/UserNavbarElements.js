import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
  background: #202020;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 768px) {
    display: fixed;
    height: 50px;
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
export const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  height: 100%;
  color: #ffdf6c;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 100%;
  margin-right: -22px;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%;
  color: #eefbfb;
`;

export const NavLinkRoute = styled(LinkRouter)`
  color: #eefbfb;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 2rem 0 2rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:active {
    color: #ffdf6c;
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
    color: white;
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
    height: 85px;
    font-size: 1rem;
    position: fixed;
    z-index: 1;
    bottom: 0;
    background: #202020;
    box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const BottomNavMenu = styled.ul`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
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
    color: #ffdf6c;
  }
`;
export const BottomNavIcon = styled.div`
  color: #fff;
  text-align: center;
  font-size: 30px;
  width: 100%;
  height: 100%;
  -webkit-transition: color 500ms ease-in-out;
  -moz-transition: color 500ms ease-in-out;
  -o-transition: color 500ms ease-in-out;
  transition: color 500ms ease-in-out;
`;
export const BottomNavLinkName = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  -webkit-transition: color 500ms ease-in-out;
  -moz-transition: color 500ms ease-in-out;
  -o-transition: color 500ms ease-in-out;
  transition: color 500ms ease-in-out;
`;

// Dropdown menu

export const DropdownList = styled.div`
  position: absolute;
  top: 50px;
  width: 230px;
  font-size: 14px;
  background: #fff;
  border-radius: 5px;
  transform: translate(-80%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: #262626;

  &:hover {
    background: lightgray;
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
export const DropdownArrow = styled.div`
  position: fixed;
  left: 192px;
  top: -7px;
  bottom: -6px;
  height: 14px;
  z-index: -1;
  width: 14px;
  transform: rotate(45deg);
  background: #fff;
`;
