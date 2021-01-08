import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { NavLink as NavLinkRouter } from 'react-router-dom';

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
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
`;
export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  height: 100%;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-self: flex-end;
    align-items: center;
    font-size: 1.8em;
    color: #222;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 100%;

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
