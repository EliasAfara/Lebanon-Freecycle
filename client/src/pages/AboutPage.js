import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import './AboutPageStyles.css';
// import AboutUsComponent from '../components/layout/AboutUs';

const AboutPage = () => {
  return (
    <div style={{ maxWidth: '750px', width: 'inherit' }}>
      <div style={{ maxWidth: '700px', width: 'inherit', padding: '0 25px' }}>
        <h1 className='Section-header'>About us</h1>{' '}
        <p>
          Lebanon Freecycle is a social network founded in 2021 by
          <a
            href='https://www.linkedin.com/in/eliasafara/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            Elias Afara
            <span aria-hidden='true' style={{ verticalAlign: '0.14em' }}>
              {' '}
              <FaLinkedin />{' '}
            </span>
          </a>
          that facilitates the connection between people in Lebanon&nbsp;
          <img
            src='https://cdn.countryflags.com/thumbs/lebanon/flag-400.png'
            alt='Lebanon'
            height='10px'
            style={{ verticalAlign: '0.01em' }}
            draggable='false'
            loading='lazy'
          />
          &nbsp;who are kind-hearted and are willing to help/support each other
          and draw a smile on the faces of those who are underprivileged in such
          a tough time.
        </p>{' '}
        <p>
          We aim to boost reuse and reduce waste by delivering a free Internet
          service that enables users to spend undesirable and recycled resources
          and request support.
        </p>{' '}
        <Link to='/faq/extension/' className='faq-link-btn'>
          <span className='faq-btn__content'>
            <svg
              stroke='currentColor'
              fill=''
              strokeWidth='0'
              version='1'
              viewBox='0 0 48 48'
              enableBackground='new 0 0 48 48'
              className='btn-icon'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill=' #2196f3'
                d='M15,40h23l6,6V25c0-2.2-1.8-4-4-4H15c-2.2,0-4,1.8-4,4v11C11,38.2,12.8,40,15,40z'
              ></path>
              <path
                fill=' #2196f3'
                d='M33,25H10l-6,6V8c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v13C37,23.2,35.2,25,33,25z'
              ></path>
            </svg>
            Frequently asked questions
          </span>
        </Link>{' '}
        <h3 className='text-h3'>Get in touch</h3>{' '}
        <p>
          We love to hear from you. If you have any comments, questions or
          suggestions, please don't hesitate to
          <Link to='/contact-us'> contact us</Link>.
        </p>{' '}
      </div>
    </div>
  );
};

export default AboutPage;
