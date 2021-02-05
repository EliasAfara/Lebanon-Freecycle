import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../components/Forms/ContactUs';
import Footer from '../components/layout/Footer';
import * as S from './styles';

const ContactUsPage = () => {
  return (
    <div className='containerMother'>
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
