import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <MDBFooter color="indigo" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="9 6">
              <h5 className="title">Our Mission</h5>
              <p>
                Here at <strong>Lebanon Freecycle</strong>, we work hard to make
                it easy for our fellow Humans to do just that: Help Others. We
                are committed to making the connection between people with
                usable items they don't need and charities that can benefit from
                them.
              </p>
            </MDBCol>
            <MDBCol md="3 6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/donations">Donations</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/requests">Requests</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/about">About</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> Elias Afara </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
