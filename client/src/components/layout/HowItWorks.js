import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { HowItWorksData } from '../../shared/HowItWorksData';
import { Accordion, Card, Button } from 'react-bootstrap';
import { MDBBtn, MDBIcon } from 'mdbreact';

const HowItWorksSteps = ({ title, content, icon }) => {
  return (
    <>
      <Card className='accordinCard'>
        <Card.Header>
          <MDBIcon icon={icon} aria-hidden='true' /> {title}
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <br />
    </>
  );
};

const HowItWorks = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState('Show details');

  const scrollToSection = () => {
    scroller.scrollTo('howitworks', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const handleDetails = () => {
    scrollToSection();
    if (showDetails) {
      setDetails('Show details');
      setShowDetails(false);
    } else {
      setDetails('Hide details');
      setShowDetails(true);
    }
  };

  return (
    <div className='howitworks'>
      <h3 className='howitworks__heading'>How it works</h3>
      <Accordion>
        {HowItWorksData.map((item) => (
          <HowItWorksSteps
            title={item.title}
            content={item.content}
            icon={item.icon}
          />
        ))}

        <Accordion.Toggle
          as={Button}
          variant='link'
          eventKey='0'
          onClick={handleDetails}
          style={{ padding: 0, margin: 0 }}
        >
          <MDBBtn rounded gradient='blue' style={{ margin: 0 }}>
            <MDBIcon icon={showDetails ? 'eye' : 'eye-slash'} /> {details}
          </MDBBtn>
        </Accordion.Toggle>
      </Accordion>
    </div>
  );
};

export default HowItWorks;
