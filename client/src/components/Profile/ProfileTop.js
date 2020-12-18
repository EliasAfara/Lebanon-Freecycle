import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

//import { IoMdSettings } from 'react-icons/io';
import { RiFacebookFill } from 'react-icons/ri';
import { RiTwitterFill } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import VerifiedBadgeSVG from '../SVGComponents/VerifiedBadgeSVG';

import * as S from './ProfileElements';
import { Link } from 'react-router-dom';

// Get user data from url params (username) not from logged in user

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
  return (
    <>
      <S.ProfileHeader>
        <S.HeaderImage>
          <S.ImageSpan>
            <S.UserAvatar src={avatar} alt='Avatar' draggable='false' />
          </S.ImageSpan>
          <S.SocialIcons>
            {social && social.facebook && (
              <Link
                to={social.facebook}
                target='_blank'
                rel='noopener noreferrer external'
              >
                <S.IconBtn>
                  <RiFacebookFill />
                </S.IconBtn>
              </Link>
            )}

            {social && social.twitter && (
              <Link
                to={social.twitter}
                target='_blank'
                rel='noopener noreferrer external'
              >
                <S.IconBtn>
                  <RiTwitterFill />
                </S.IconBtn>
              </Link>
            )}

            {social && social.instagram && (
              <Link
                to={social.instagram}
                target='_blank'
                rel='noopener noreferrer external'
              >
                <S.IconBtn>
                  <RiInstagramLine />
                </S.IconBtn>
              </Link>
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
            <S.DisplayUserV2>
              {' '}
              <S.UserName>{username}</S.UserName>
              {verified && (
                <div style={{ marginLeft: '8px' }}>
                  <VerifiedBadgeSVG />
                </div>
              )}
            </S.DisplayUserV2>

            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user.username === username && (
                <S.EditBtnDiv>
                  <S.EditBtn>Edit Profile</S.EditBtn>
                </S.EditBtnDiv>
              )}

            <S.Icons>
              <S.SocialIconsV2>
                {social && social.facebook && (
                  <Link
                    to={social.facebook}
                    target='_blank'
                    rel='noopener noreferrer external'
                  >
                    <S.IconBtn>
                      <RiFacebookFill />
                    </S.IconBtn>
                  </Link>
                )}

                {social && social.twitter && (
                  <Link
                    to={social.twitter}
                    target='_blank'
                    rel='noopener noreferrer external'
                  >
                    <S.IconBtn>
                      <RiTwitterFill />
                    </S.IconBtn>
                  </Link>
                )}

                {social && social.instagram && (
                  <Link
                    to={social.instagram}
                    target='_blank'
                    rel='noopener noreferrer external'
                  >
                    <S.IconBtn>
                      <RiInstagramLine />
                    </S.IconBtn>
                  </Link>
                )}
              </S.SocialIconsV2>

              {/* <S.SettingIconDiv>
                <span
                  onClick={SettingPopUpFunction}
                  style={{ cursor: 'pointer' }}
                >
                  <IoMdSettings />
                </span>
              </S.SettingIconDiv> */}
            </S.Icons>
          </S.SectionHeader>

          <S.UnOrderedList>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>{donations}</S.ItemCount> Donations
              </S.ListItemSpan>
            </S.ListItems>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>{requests}</S.ItemCount> Requests
              </S.ListItemSpan>
            </S.ListItems>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>{likes}</S.ItemCount> Likes
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
