import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="footer">
      <MDBFooter color="indigo" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="8 6">
              <h5 className="title">Our Mission</h5>
              <hr
                class="info-color mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                Here at <strong>Lebanon Freecycle</strong>, we work hard to make
                it easy for our fellow Humans to do just that: Help Others. We
                are committed to making the connection between people with
                usable items they don't need and charities that can benefit from
                them.
              </p>
            </MDBCol>
            <MDBCol md="2" className="resCol">
              <h5 className="title">Links</h5>
              <hr
                class="info-color mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/donations">Donations</Link>
                </li>
                <li>
                  <Link to="/requests">Requests</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="2" className="resCol">
              <h5 className="title">Support</h5>
              <hr
                class="info-color mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <ul className="list-unstyled">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/faq">Help & FAQs</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBBtn outline onClick={handleToggle}>
              <MDBIcon icon="globe pr-3" aria-hidden="true" />
              English &nbsp;
              <MDBIcon icon="chevron-right pr-3" aria-hidden="true" />
            </MDBBtn>
            <MDBModal isOpen={showModal} toggle={handleToggle} centered>
              <MDBModalHeader style={{ color: "black" }} toggle={handleToggle}>
                Choose Your Language
              </MDBModalHeader>
              <MDBModalBody>
                <MDBBtn outline onClick={handleToggle}>
                  Arabic
                </MDBBtn>
                <MDBBtn outline onClick={handleToggle}>
                  Français
                </MDBBtn>
              </MDBModalBody>
            </MDBModal>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: Elias Afara
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
