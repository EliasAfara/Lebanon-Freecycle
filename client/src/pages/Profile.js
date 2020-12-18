import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ProfileTop from '../components/Profile/ProfileTop';
import ProfileBottom from '../components/Profile/ProfileBottom';

// Redux
import { connect } from 'react-redux';

import SpinnerSVG from '../components/SVGComponents/SpinnerSVG';

import { getProfileByUsername } from '../actions/profile';

const Profile = ({ getProfileByUsername, profile: { profile }, match }) => {
  useEffect(() => {
    getProfileByUsername(match.params.username);
  }, [getProfileByUsername, match.params.username]);

  return (
    <>
      {profile === null ? (
        <SpinnerSVG />
      ) : (
        <>
          <ProfileTop profile={profile} />
          <ProfileBottom />
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileByUsername: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileByUsername })(Profile);
