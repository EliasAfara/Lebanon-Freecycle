import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

// Redux
import { connect } from 'react-redux';
import { getProfileByUsername } from '../actions/profile';

import Spinner from '../components/Spinner/Spinner';
import { Space, Spin } from 'antd';

const ProfileTop = loadable(() => import('../components/Profile/ProfileTop'), {
  fallback: (
    <div style={{ textAlign: 'center' }}>
      <Space size='middle'>
        <Spin size='large' />
      </Space>
    </div>
  ),
});
const ProfileBottom = loadable(
  () => import('../components/Profile/ProfileBottom'),
  {
    fallback: <div />,
  }
);

const UserNotFound = loadable(
  () => import('../components/Profile/UserNotFound'),
  {
    fallback: <div />,
  }
);

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
    <div style={{ maxWidth: '800px', width: 'inherit' }}>
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
