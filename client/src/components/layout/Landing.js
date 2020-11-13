import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <section className='main'>
        <div className='main-text'>
          <span>GIVE A HAND</span> <br />
          <blockquote>
            &ldquo;Be the change you want to see in the world.&rdquo; ~ Mahatma
            Gandhi
          </blockquote>
          {/* <Link to="/login">
            <MDBBtn gradient="blue" className="landing-btn">
              <MDBIcon icon="plus pr-2" aria-hidden="true" />
              Donate
            </MDBBtn>
          </Link>
          <Link to="/login">
            <MDBBtn gradient="blue" className="landing-btn" to="/login">
              <MDBIcon icon="plus pr-2" aria-hidden="true" />
              Request
            </MDBBtn>
          </Link> */}
          <Link to='/Donations'>
            <MDBBtn gradient='blue' className='landing-btn'>
              Browse &nbsp; <MDBIcon icon='angle-double-right' />
            </MDBBtn>
          </Link>
          <br />
        </div>
        <img src='assets/images/undraw_gifts_btw0.png' alt='Give a hand' />
      </section>
    </>
  );
};

export default Landing;
