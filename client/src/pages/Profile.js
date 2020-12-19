import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ProfileTop from '../components/Profile/ProfileTop';
import ProfileBottom from '../components/Profile/ProfileBottom';

// Redux
import { connect } from 'react-redux';

//import SpinnerSVG from '../components/SVGComponents/SpinnerSVG';
import Spinner from '../components/Spinner/Spinner';

import { getProfileByUsername } from '../actions/profile';

const Profile = ({
  getProfileByUsername,
  profile: { profile, error },
  match,
}) => {
  const userNameInParam = match.params.username;
  useEffect(() => {
    getProfileByUsername(userNameInParam);
  }, [getProfileByUsername, userNameInParam]);

  return (
    <>
      {Object.keys(error).length === 0 && error.constructor === Object ? (
        profile === null ? (
          <Spinner />
        ) : (
          <>
            <ProfileTop profile={profile} />
            <ProfileBottom
              totalDonations={profile.donations}
              totalRequests={profile.requests}
            />
          </>
        )
      ) : (
        <p>User Does not Exist</p>
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
