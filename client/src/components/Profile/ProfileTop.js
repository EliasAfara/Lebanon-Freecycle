import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

//import { IoMdSettings } from 'react-icons/io';
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from 'react-icons/ri';
import VerifiedBadgeSVG from '../SVGComponents/VerifiedBadgeSVG';

import * as S from './ProfileElements';

function useWindowScreenWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowWidth;
}

const ProfileTop = ({
  profile: {
    fullname,
    username,
    bio,
    avatar,
    likes,
    donations,
    requests,
    verified,
    social,
  },
  auth,
}) => {
  const screenWidth = useWindowScreenWidth();
  return (
    <>
      <S.ProfileHeader>
        <S.HeaderImage>
          <S.ImageSpan>
            <S.UserAvatar src={avatar} alt='Avatar' draggable='false' />
          </S.ImageSpan>
          <S.SocialIcons>
            {social && social.facebook && (
              <a
                href={social.facebook}
                target='_blank'
                rel='noopener noreferrer'
              >
                <S.IconBtn>
                  <RiFacebookFill />
                </S.IconBtn>
              </a>
            )}

            {social && social.twitter && (
              <a
                href={social.twitter}
                target='_blank'
                rel='noopener noreferrer'
              >
                <S.IconBtn>
                  <RiTwitterFill />
                </S.IconBtn>
              </a>
            )}

            {social && social.instagram && (
              <a
                href={social.instagram}
                target='_blank'
                rel='noopener noreferrer'
              >
                <S.IconBtn>
                  <RiInstagramLine />
                </S.IconBtn>
              </a>
            )}
          </S.SocialIcons>

          <S.DisplayUserV1>
            {' '}
            <S.UserName>{username}</S.UserName>
            {verified && (
              <div style={{ marginLeft: '8px' }}>
                <VerifiedBadgeSVG />
              </div>
            )}
          </S.DisplayUserV1>
        </S.HeaderImage>

        <S.UserInfoSection>
          <S.SectionHeader>
            {screenWidth < 769 ? null : (
              <S.DisplayUserV2>
                {' '}
                <S.UserNameV2>{username}</S.UserNameV2>
                {verified && (
                  <div style={{ marginLeft: '8px' }}>
                    <VerifiedBadgeSVG />
                  </div>
                )}
              </S.DisplayUserV2>
            )}

            {auth.isAuthenticated &&
              auth.authLoading === false &&
              auth.user.username === username && (
                <S.EditBtnDiv to='/setting/edit-profile' title='Edit Profile'>
                  <S.EditBtn>Edit Profile</S.EditBtn>
                </S.EditBtnDiv>
              )}
            {(social && social.facebook) ||
            (social && social.twitter) ||
            (social && social.instagram) ? (
              <S.Icons>
                <S.SocialIconsV2>
                  {social && social.facebook && (
                    <a
                      href={social.facebook}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <S.IconBtn bgColor='#0075FA'>
                        <RiFacebookFill />
                      </S.IconBtn>
                    </a>
                  )}

                  {social && social.twitter && (
                    <a
                      href={social.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <S.IconBtn bgColor='#1DA1F2'>
                        <RiTwitterFill />
                      </S.IconBtn>
                    </a>
                  )}

                  {social && social.instagram && (
                    <a
                      href={social.instagram}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <S.IconBtn bgColor='radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'>
                        <RiInstagramLine />
                      </S.IconBtn>
                    </a>
                  )}
                </S.SocialIconsV2>
              </S.Icons>
            ) : null}
          </S.SectionHeader>

          <S.UnOrderedList>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>
                  {donations && donations.length > 0 ? donations.length : 0}
                </S.ItemCount>{' '}
                <span> Donations</span>
              </S.ListItemSpan>
            </S.ListItems>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>
                  {requests && requests.length > 0 ? requests.length : 0}
                </S.ItemCount>{' '}
                <span> Requests</span>
              </S.ListItemSpan>
            </S.ListItems>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>{likes}</S.ItemCount>
                <span> Likes</span>
              </S.ListItemSpan>
            </S.ListItems>
          </S.UnOrderedList>

          <S.ProfileBio>
            <S.UserFullName>{fullname}</S.UserFullName>
            <span role='img' aria-label='bio' style={{ width: '100%' }}>
              {bio}
            </span>
          </S.ProfileBio>
        </S.UserInfoSection>
      </S.ProfileHeader>
    </>
  );
};

ProfileTop.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ProfileTop);
