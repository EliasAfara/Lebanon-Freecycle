import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { IoMdSettings } from 'react-icons/io';
import { RiFacebookFill } from 'react-icons/ri';
import { RiTwitterFill } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import VerifiedBadgeSVG from '../SVGComponents/VerifiedBadgeSVG';

import * as S from './ProfileElements';

const ProfileTop = ({ auth: { user } }) => {
  const SettingPopUpFunction = () => {
    // Pop up which will display setting options (Change password / logout)
    // Pop up similar to instagram popup
  };

  const verified = true;
  return (
    <>
      <S.ProfileHeader>
        <S.HeaderImage>
          <S.ImageSpan>
            <S.UserAvatar src={user && user.avatar} alt='Avatar' />
          </S.ImageSpan>

          <S.SocialIcons>
            <S.IconBtn>
              <RiFacebookFill />
            </S.IconBtn>
            <S.IconBtn>
              <RiTwitterFill />
            </S.IconBtn>
            <S.IconBtn>
              <RiInstagramLine />
            </S.IconBtn>
          </S.SocialIcons>

          <S.DisplayUserV1>
            {' '}
            <S.UserName>{user && user.username}</S.UserName>
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
              <S.UserName>{user && user.username}</S.UserName>
              {verified && (
                <div style={{ marginLeft: '8px' }}>
                  <VerifiedBadgeSVG />
                </div>
              )}
            </S.DisplayUserV2>

            <S.EditBtnDiv>
              <S.EditBtn>Edit Profile</S.EditBtn>
            </S.EditBtnDiv>

            <S.Icons>
              <S.SocialIconsV2>
                <S.IconBtn>
                  <RiFacebookFill />
                </S.IconBtn>
                <S.IconBtn>
                  <RiTwitterFill />
                </S.IconBtn>
                <S.IconBtn>
                  <RiInstagramLine />
                </S.IconBtn>
              </S.SocialIconsV2>

              <S.SettingIconDiv>
                <span
                  onClick={SettingPopUpFunction}
                  style={{ cursor: 'pointer' }}
                >
                  <IoMdSettings />
                </span>
              </S.SettingIconDiv>
            </S.Icons>
          </S.SectionHeader>

          <S.UnOrderedList>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>3</S.ItemCount> Donations
              </S.ListItemSpan>
            </S.ListItems>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>2</S.ItemCount> Available
              </S.ListItemSpan>
            </S.ListItems>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>1</S.ItemCount> Completed
              </S.ListItemSpan>
            </S.ListItems>
          </S.UnOrderedList>
          <S.UnOrderedList>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>1</S.ItemCount> Requests&nbsp;&nbsp;&nbsp;
              </S.ListItemSpan>
            </S.ListItems>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>1</S.ItemCount> Available
              </S.ListItemSpan>
            </S.ListItems>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>0</S.ItemCount> Completed
              </S.ListItemSpan>
            </S.ListItems>
          </S.UnOrderedList>

          <S.ProfileBio>
            <S.UserFullName>{user && user.fullname}</S.UserFullName>
            <span role='img' aria-label='bio' style={{ width: '100%' }}>
              Lorem ipsum dit Lorem ipsum dit Lorem ipsum dit Lorem ipsum dit
              Lorem ipsum dit Lorem ipsum dit Lorem ipsum dit Lorem ipsum dit
              Lorem ipsum dit Lorem ipsum dit Lorem ipsum. 📷✈️🏕️
            </span>
          </S.ProfileBio>
        </S.UserInfoSection>
      </S.ProfileHeader>
      <hr />
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
