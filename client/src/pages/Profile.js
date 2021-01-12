import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ProfileTop from '../components/Profile/ProfileTop';
import ProfileBottom from '../components/Profile/ProfileBottom';

// Redux
import { connect } from 'react-redux';

//import SpinnerSVG from '../components/SVGComponents/SpinnerSVG';
import Spinner from '../components/Spinner/Spinner';

import { getProfileByUsername } from '../actions/profile';
import UserNotFound from '../components/Profile/UserNotFound';

const Profile = ({
  getProfileByUsername,
  profile: { profile, profileLoading, error },
  match,
}) => {
  const userNameInParam = match.params.username;
  useEffect(() => {
    getProfileByUsername(userNameInParam);
  }, [getProfileByUsername, userNameInParam]);

  return (
    <div style={{ maxWidth: '1000px', width: 'inherit' }}>
      {Object.keys(error).length === 0 && error.constructor === Object ? (
        profileLoading && profile === null ? (
          <Spinner />
        ) : (
          <>
            <ProfileTop profile={profile} />
            <ProfileBottom
              profile={profile}
              userNameInParam={userNameInParam}
            />
          </>
        )
      ) : (
        <UserNotFound />
      )}
    </div>
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
