import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { IoMdSettings } from 'react-icons/io';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

import './styleProfile.css';

const Profile = ({ auth: { user } }) => {
  return (
    <>
      <header className='profile-header'>
        <div className='profile-image'>
          <span className='profile-image-span'>
            <img src={user && user.avatar} alt='Avatar' />
          </span>
          <div className='social-icons'>
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaInstagramSquare />
          </div>
        </div>

        <section className='profile-user-info'>
          <div className='profile-user-settings'>
            <h2 className='profile-user-name'>{user && user.username}</h2>

            <div className='div-profile-edit-btn'>
              <button className='profile-edit-btn'>Edit Profile</button>
            </div>

            <div className='div-profile-settings-btn'>
              <button
                className='profile-settings-btn'
                aria-label='profile settings'
              >
                <IoMdSettings />
              </button>
            </div>
          </div>

          <ul className='ig-ul'>
            <li className='ig-li'>
              <span className='ig-li-span'>
                <span className='profile-stat-count'>3</span> Donations
              </span>
            </li>
            <li className='ig-li'>
              <span className='ig-li-span'>
                <span className='profile-stat-count'>2</span> Available
              </span>
            </li>
            <li className='ig-li'>
              <span className='ig-li-span'>
                <span className='profile-stat-count'>1</span> Completed
              </span>
            </li>
          </ul>
          <ul className='ig-ul'>
            <li className='ig-li'>
              <span className='ig-li-span'>
                <span className='profile-stat-count'>1</span>{' '}
                Requests&nbsp;&nbsp;&nbsp;
              </span>
            </li>
            <li className='ig-li'>
              <span className='ig-li-span'>
                <span className='profile-stat-count'>1</span> Available
              </span>
            </li>
            <li className='ig-li'>
              <span className='ig-li-span'>
                <span className='profile-stat-count'>0</span> Completed
              </span>
            </li>
          </ul>
          <div className='profile-bio'>
            <h1 className='profile-user-fullname'>{user && user.fullname}</h1>
            <span role='img' aria-label='bio'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
            </span>
            <div className='profile__website' style={{ width: 'fit-content' }}>
              <a href='www.google.com' target='_blank' className='bio-website'>
                www.google.com
              </a>
            </div>
          </div>
        </section>
      </header>
      <hr />
    </>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Profile);
