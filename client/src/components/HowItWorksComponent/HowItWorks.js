import React, { useState } from "react";
import "./HowItWorks.css";
import { Accordion, Card, Button } from "react-bootstrap";
import { MDBBtn, MDBIcon } from "mdbreact";

const HowItWorks = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState("Show details");

  const handleDetails = () => {
    if (showDetails) {
      setDetails("Show details");
      setShowDetails(false);
    } else {
      setDetails("Hide details");
      setShowDetails(true);
    }
  };

  return (
    <div className="how-it-works">
      {/* <img
          src="assets/images/undraw_observations_mejb.png"
          alt="Lebanon Freecycle"
          className="navbar-logo"
        /> */}
      <h3 id="howitworks">How it works</h3>
      <Accordion>
        <Card className="accordinCard">
          <Card.Header>
            <MDBIcon far icon="edit red-text pr-3" aria-hidden="true" /> Post an
            item
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Text>
                Simply take a photo and briefly describe the item you're giving
                away.
                <br />
                You can include any preferences you have about the pickup time
                or location.
                <br />
                Don't forget to provide your contact information so that people
                can get in touch with you.
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <br />

        <Card className="accordinCard">
          <Card.Header>
            <MDBIcon far icon="edit red-text pr-3" aria-hidden="true" />
            Request an item
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Text>
                Simply provide a description of the item you need and the reason
                behind requesting the item.
                <br />
                Don't forget to provide your contact information so that people
                can get in touch with you.
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <br />
        <Card className="accordinCard">
          <Card.Header>
            <MDBIcon icon="people-carry indigo-text pr-3" aria-hidden="true" />
            Arrange pickup
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Text>
                Contact the item provider and arrange a time and place to pick
                up the provided items.
                <br />
                Most pickups are left on a porch or at the curb or by meeting in
                a public place.
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <br />
        <Card className="accordinCard">
          <Card.Header>
            <MDBIcon icon="redo-alt green-text pr-3" aria-hidden="true" />
            Repeat
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Text>
                Save money and keep usable items out of the trash by reusing
                them.
                <br /> And make new friends!{" "}
                <MDBIcon
                  far
                  icon="smile-wink amber-text pr-3"
                  aria-hidden="true"
                />
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          onClick={handleDetails}
          href="#howitworks"
        >
          <MDBBtn rounded gradient="blue">
            <MDBIcon far icon={showDetails ? "eye-slash" : "eye"} /> {details}
          </MDBBtn>
        </Accordion.Toggle>
      </Accordion>
    </div>
  );
};

export default HowItWorks;
