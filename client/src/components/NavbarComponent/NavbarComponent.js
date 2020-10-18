import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleCollapse = () => setOpen(!open);

  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <MDBNavLink to="/">
          {/* <img
            src="assets/images/logo.png"
            alt="Lebanon Freecycle"
            className="navbar-logo"
          /> */}
          Lebanon Freecycle
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
        <MDBNavbarNav right classNam="navbar">
          <MDBNavItem>
            <MDBNavLink to="/" className="nav-linkz nav-linkz-ltr">
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/donations" className="nav-linkz nav-linkz-ltr">
              Donations
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/requests" className="nav-linkz nav-linkz-ltr">
              Requests
            </MDBNavLink>
          </MDBNavItem>
          {/* <MDBNavItem>
            <MDBNavLink to="/about" className="nav-linkz nav-linkz-ltr">About</MDBNavLink>
          </MDBNavItem> */}
          <MDBNavItem>
            <MDBNavLink to="/login" className="nav-linkz nav-linkz-ltr">
              Login
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
