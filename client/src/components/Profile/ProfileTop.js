import React from 'react';

//import { IoMdSettings } from 'react-icons/io';
import { RiFacebookFill } from 'react-icons/ri';
import { RiTwitterFill } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import VerifiedBadgeSVG from '../SVGComponents/VerifiedBadgeSVG';

import * as S from './ProfileElements';

// Get user data from url params (username) not from logged in user

const ProfileTop = ({ fullname, username, avatar, verified, bio }) => {
  return (
    <>
      <S.ProfileHeader>
        <S.HeaderImage>
          <S.ImageSpan>
            <S.UserAvatar src={avatar} alt='Avatar' draggable='false' />
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
                <S.ItemCount>3</S.ItemCount> Donations
              </S.ListItemSpan>
            </S.ListItems>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>2</S.ItemCount> Requests
              </S.ListItemSpan>
            </S.ListItems>
            <S.ListItems>
              <S.ListItemSpan>
                <S.ItemCount>0</S.ItemCount> Likes
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

export default ProfileTop;
