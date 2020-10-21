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
  const [active, setActive] = useState("Home");

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
      <MDBCollapse
        id="navbarCollapse3"
        isOpen={open}
        navbar
        style={{ textAlign: "center" }}
      >
        <MDBNavbarNav right>
          <MDBNavItem className={active === "Home" ? "active" : null}>
            <MDBNavLink to="/" onClick={() => setActive("Home")}>
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className={active === "Donations" ? "active" : null}>
            <MDBNavLink to="/donations" onClick={() => setActive("Donations")}>
              Donations
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className={active === "Requests" ? "active" : null}>
            <MDBNavLink to="/requests" onClick={() => setActive("Requests")}>
              Requests
            </MDBNavLink>
          </MDBNavItem>
          {/* <MDBNavItem>
            <MDBNavLink to="/about" className="nav-link nav-link-ltr">About</MDBNavLink>
          </MDBNavItem> */}
          <MDBNavItem className={active === "Login" ? "active" : null}>
            <MDBNavLink to="/login" onClick={() => setActive("Login")}>
              Login
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
