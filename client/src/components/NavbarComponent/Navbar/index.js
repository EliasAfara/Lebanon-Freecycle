import React from "react";
import { FaBars } from "react-icons/fa";
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
} from "./NavbarElements";

const Navbar = ({ toggleNavBar }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LFC</NavLogo>

          <MobileIcon onClick={toggleNavBar}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinkRoute to="/about">About</NavLinkRoute>
            </NavItem>
            <NavItem>
              <NavLinkRoute to="/donations">Donations</NavLinkRoute>
            </NavItem>
            <NavItem>
              <NavLinkRoute to="/requests">Requests</NavLinkRoute>
            </NavItem>
            <NavItem>
              <NavLinkRoute to="/Login">Login</NavLinkRoute>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/register">Join for free</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
