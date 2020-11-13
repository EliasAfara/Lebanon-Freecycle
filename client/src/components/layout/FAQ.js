import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '1rem',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '80%',
    flexShrink: 0,
    fontWeight: 'bold',
  },
  details: {
    borderTop: '1px dotted grey',
    color: '#6C63FF',
    padding: '16px 16px 16px',
    opacity: '0.9',
  },
}));

const FAQComponent = ({ title, content }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='col'>
      <div className='card' style={{ marginBottom: '2rem' }}>
        <div className='card-body'>
          <div className='faqs__content'>
            <h1 className='card-title'>{title}</h1>
            {content.map((item) => (
              <div key={item.id} className={classes.root}>
                <Accordion
                  expanded={expanded === item.id}
                  onChange={handleChange(item.id)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: '#6C63FF' }} />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                  >
                    <Typography className={classes.heading}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                    <Typography>{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
