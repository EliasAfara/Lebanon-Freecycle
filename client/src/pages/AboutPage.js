import React from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';

import { FaLinkedin } from 'react-icons/fa';

import * as S from './styles';
import HeadHelmet from '../utils/HeadHelmet';

const Footer = loadable(() => import('../components/layout/Footer'));

const AboutPage = () => {
  return (
    <div className='containerMother'>
      <HeadHelmet
        title='About Us • Lebanon Freecycle'
        description='Lebanon Freecycle is a social network founded in 2021 by Elias Afara that facilitates the connection between people in Lebanon who are kind-hearted and are willing to help/support each other and draw a smile on the faces of those who are underprivileged in such a tough time.'
        url='https://www.lebanon-freecycle.live/about'
        image='https://res.cloudinary.com/freecyclelebanon/image/upload/v1613940519/lfc_dqjvkj.png'
      />
      <div className='public-container'>
        <S.PublicPageContentHeader>
          About <S.themeActiveColor>Us</S.themeActiveColor>
        </S.PublicPageContentHeader>{' '}
        <p style={{ fontSize: '16px' }}>
          Lebanon Freecycle is a social network founded in 2021 by
          <a
            href='https://www.linkedin.com/in/eliasafara/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <S.themeActiveColor>
              Elias Afara
              <span aria-hidden='true' style={{ verticalAlign: '-0.1em' }}>
                {' '}
                <FaLinkedin />{' '}
              </span>
            </S.themeActiveColor>
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
        <br />
        <br />
        <p style={{ fontSize: '16px' }}>
          We aim to boost reuse and reduce waste by delivering a free Internet
          service that enables users to spend undesirable and recycled resources
          and request support.
        </p>{' '}
        <S.TextH3>Get in touch</S.TextH3>{' '}
        <p style={{ fontSize: '16px' }}>
          We love to hear from you. If you have any comments, questions or
          suggestions, please don't hesitate to
          <Link to='/contact-us'>
            <S.themeActiveColor> contact us</S.themeActiveColor>
          </Link>
          .
        </p>{' '}
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
