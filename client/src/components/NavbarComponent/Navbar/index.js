import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import LogoSVG from '../../SVGComponents/LogoSVG';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinkRoute,
  MobileIcon,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggleNavBar }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <NavLink to='/'>
              <LogoSVG />
            </NavLink>
          </NavLogo>

          <MobileIcon onClick={toggleNavBar}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinkRoute to='/about'>About</NavLinkRoute>
            </NavItem>
            <NavItem>
              <NavLinkRoute to='/donations'>Donations</NavLinkRoute>
            </NavItem>
            <NavItem>
              <NavLinkRoute to='/requests'>Requests</NavLinkRoute>
            </NavItem>
            <NavItem>
              <NavLinkRoute to='/Login'>Login</NavLinkRoute>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to='/register'>JOIN FREE</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
