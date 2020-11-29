import React from 'react';
import PropTypes from 'prop-types';

import ProfileTop from '../components/Profile/ProfileTop';

// Redux
import { connect } from 'react-redux';
import ProfileBottom from '../components/Profile/ProfileBottom';
/*
fullname
username
avatar
verified
bio

TotalDonations
AvailableDonationsCount
CompletedDonationsCount

TotalRequests
AvailableRequestsCount
CompletedRequestsCount


facebook
twitter
instagram


*/

const bio =
  'Lorem Elias ipsum dit Lorem ipsum dit Lorem ipsum dit Lorem ipsum ditLorem ipsum dit Lorem ipsum dit Lorem ipsum dit Lorem ipsum ditLorem ipsum dit Lorem ipsum dit Lorem ipsum📷✈️🏕️';

const Profile = ({ auth: { user } }) => {
  return (
    <>
      <ProfileTop
        fullname={user && user.fullname}
        username={user && user.username}
        avatar={user && user.avatar}
        verified={true}
        bio={bio}
      />
      <ProfileBottom />
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
