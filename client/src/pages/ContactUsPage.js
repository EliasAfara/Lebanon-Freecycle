import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../components/layout/ContactUs';
import FooterCopyright from '../components/layout/FooterCopyright';
import ContactUsSVG from '../components/SVGComponents/ContactUsSVG';
import BreadCrumb from '../components/layout/BreadCrumb';

const ContactUsPage = () => {
  const screenWidth = window.innerWidth;
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  useEffect(() => {
    if (window.innerWidth >= 1444) {
      setWidth('250');
      setHeight('250');
    } else if (window.innerWidth === 320) {
      setWidth('210');
      setHeight('210');
    } else if (window.innerWidth < 768) {
      setWidth('230');
      setHeight('230');
    }
  }, [screenWidth]);
  return (
    <div style={{ maxWidth: '1000px', width: 'inherit' }}>
      <div className='contactUS'>
        <div className='row contactUS__row' style={{ margin: 'auto' }}>
          <div className='col contactUS__info'>
            <BreadCrumb RouteName='Contact Us' />
            <br />
            <h1 className='contactUS__info--title'>Contact Us</h1>
            <div className='contactUS__info--description'>
              This is the right address for your questions and concerns, praise
              or criticism. You are welcome to contact us by phone or in
              writing.
            </div>
            <div className='contactUS__info--Icons'>
              <div className='contactUS__info--Icons--1'>
                <a href='tel:+96178845230' className='contactUS__info--link'>
                  +961 78 845 230
                </a>
              </div>
              <div className='contactUS__info--Icons--2'>
                <Link to='/faq' className='contactUS__info--link'>
                  FAQs / Help
                </Link>
              </div>
            </div>
          </div>
          <div className='col contactUS__svg'>
            <ContactUsSVG width={width} height={height} />
          </div>
        </div>
        <ContactUs />
        <FooterCopyright />
      </div>
    </div>
  );
};

export default ContactUsPage;
