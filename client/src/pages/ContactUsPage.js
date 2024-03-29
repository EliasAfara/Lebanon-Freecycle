import React from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';

import * as S from './styles';
import HeadHelmet from '../utils/HeadHelmet';

const ContactUs = loadable(() => import('../components/Forms/ContactUs'));
const Footer = loadable(() => import('../components/layout/Footer'));

const ContactUsPage = () => {
  return (
    <div className='containerMother'>
      <HeadHelmet
        title='Contact Us • Lebanon Freecycle'
        description='Have questions? Shoot us an email 📧'
        url='https://www.lebanon-freecycle.live/contact-us'
        image='https://res.cloudinary.com/freecyclelebanon/image/upload/v1613940519/lfc_dqjvkj.png'
      />
      <div className='public-container'>
        <S.ContactUsWrapper>
          <S.ContactUsContent>
            <S.PublicPageContentHeader>
              Have questions? Shoot us an{' '}
              <S.themeActiveColor>Email.</S.themeActiveColor>
            </S.PublicPageContentHeader>
            <div style={{ fontSize: '16px', marginBottom: '5px' }}>
              This is the right address for your questions and concerns, praise
              or criticism. You are welcome to contact us in writing.
              <br />
              <br />
              If you are looking for a quick answer for your question, then
              check out our{' '}
              <Link to='/faq/About' className='contactUS__info--link'>
                <S.themeActiveColor>FAQs</S.themeActiveColor>
              </Link>
              .
            </div>
          </S.ContactUsContent>

          <ContactUs />
        </S.ContactUsWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
