import React from 'react';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const FAQComponent = ({ content, faqSection }) => {
  return (
    <>
      {content.map((item) => (
        <div key={item.id}>
          {item.title === faqSection &&
            item.content.map((contentItem) => (
              <Accordion key={contentItem.id} style={{ marginBottom: '10px' }}>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey={contentItem.id}
                    style={{ cursor: 'pointer' }}
                  >
                    {contentItem.question}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={contentItem.id}>
                    <Card.Body>{contentItem.answer}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))}
        </div>
      ))}
    </>
  );
};

export default FAQComponent;

// <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
//   <AccordionSummary
//     expandIcon={<ExpandMoreIcon style={{ color: '#6C63FF' }} />}
//     aria-controls='panel1bh-content'
//     id='panel1bh-header'
//   >
//     <Typography className={classes.heading}>{item.question}</Typography>
//   </AccordionSummary>
//   <AccordionDetails className={classes.details}>
//     <Typography>{item.answer}</Typography>
//   </AccordionDetails>
// </Accordion>;
