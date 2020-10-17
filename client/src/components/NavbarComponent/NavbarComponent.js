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
          <img
            src="assets/images/logo.png"
            alt="Lebanon Freecycle"
            className="navbar-logo"
          />
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/donations">Donations</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/requests">Requests</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/about">About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/login">Login</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
