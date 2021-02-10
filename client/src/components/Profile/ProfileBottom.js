import React from 'react';
import loadable from '@loadable/component';

import { GiLifeSupport } from 'react-icons/gi';
import { GiNestedHearts } from 'react-icons/gi';
import { Space, Spin } from 'antd';

import './Profile.css';

const Tabs = loadable(() => import('../Tabs/NavTabs'), {
  fallback: (
    <div style={{ textAlign: 'center' }}>
      <Space size='middle'>
        <Spin size='large' />
      </Space>
    </div>
  ),
});
const UserDonations = loadable(() => import('./UserDonations'));
const UserRequests = loadable(() => import('./UserRequests'));

const EmptySection = ({ icon, message, username, type }) => {
  return (
    <div className='empty-section'>
      <div className='empty-section-wrapper'>
        <div className='icon-container'>
          <span aria-label='Icon' className='icon-holder'>
            {icon}
          </span>
        </div>
        <div className='message-container'>
          <h1 className='message-holder'>{message}</h1>
          <div className='message-note'>
            When {username} uploads, you'll see their {type}s here.
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileBottom = ({
  profile: { username, donations, requests },
  userNameInParam,
}) => {
  return (
    <>
      <Tabs
        firstTab={
          <span>
            <GiNestedHearts /> Donations
          </span>
        }
        firstKey='Donations'
        firstComponent={
          donations.length > 0 ? (
            <UserDonations userNameInParam={userNameInParam} />
          ) : (
            <>
              <EmptySection
                icon={<GiNestedHearts />}
                message={'No Donations Yet'}
                username={username}
                type={'donation'}
              />
            </>
          )
        }
        secondTab={
          <span>
            <GiLifeSupport /> Requests
          </span>
        }
        secondKey='Requests'
        secondComponent={
          requests.length > 0 ? (
            <UserRequests userNameInParam={userNameInParam} />
          ) : (
            <>
              <EmptySection
                icon={<GiLifeSupport />}
                message={'No Requests Yet'}
                username={username}
                type={'request'}
              />
            </>
          )
        }
        size='large'
        animated={false}
      />
    </>
  );
};

export default ProfileBottom;
