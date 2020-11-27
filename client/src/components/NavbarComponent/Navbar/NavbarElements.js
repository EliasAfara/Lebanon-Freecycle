import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { NavLink as NavLinkRouter } from 'react-router-dom';

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

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-self: flex-end;
    align-items: center;
    font-size: 1.8em;
    color: #ffdf6c;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 100%;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%;
`;

export const NavLinkRoute = styled(NavLinkRouter)`
  display: flex;
  align-items: center;
  margin: 0 2rem 0 2rem;
  color: #eefbfb;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0.3s;

  &.active {
    color: #1890ff;
    background-size: 100% 2px;
    font-weight: 600;
  }

  &:hover:not(.active) {
    color: #eefbfb;
    background-size: 100% 2px;
    font-weight: 400;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #4da8da;
  white-space: nowrap;
  padding: 8px 17px;
  color: #202020;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 2px solid #ffdf6c;
    color: #ffdf6c;
  }
`;
