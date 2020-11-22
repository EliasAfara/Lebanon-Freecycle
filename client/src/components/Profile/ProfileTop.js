import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { IoMdSettings } from 'react-icons/io';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

import * as S from './ProfileElements';

const ProfileTop = ({ auth: { user } }) => {
  return (
    <>
      <S.ProfileHeader>
        <S.HeaderImage>
          <S.ImageSpan>
            <S.UserAvatar src={user && user.avatar} alt='Avatar' />
          </S.ImageSpan>
          <S.SocialIcons>
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaInstagramSquare />
          </S.SocialIcons>
        </S.HeaderImage>

        <S.UserInfoSection>
          <S.SectionHeader>
            <S.UserName>{user && user.username}</S.UserName>

            <S.EditBtnDiv>
              <S.EditBtn>Edit Profile</S.EditBtn>
            </S.EditBtnDiv>

            <S.SettingBtnDiv>
              <S.SettingBtn aria-label='profile settings'>
                <IoMdSettings />
              </S.SettingBtn>
            </S.SettingBtnDiv>
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
              Lorem ipsum dit 📷✈️🏕️ Lorem ipsum dit 📷✈️🏕️ Loem ipsum dit
              📷✈️🏕️ Lorem ipsum dit 📷✈️🏕️ Lorem ipsum dit 📷✈️🏕️ Lorem ipsum
              📷✈️🏕️ Lorem ipsum dit 📷✈️🏕️ Lorem ipsum dit 📷✈️🏕️ Lorem ipsum
              📷✈️🏕️ Lorem ipsum dit 📷✈️🏕️ Lorem ipsum dit 📷✈️🏕️ Lorem ipsum
              dit 📷✈️🏕️
            </span>
            <S.ProfileWebsite>
              <Link to='www.google.com' target='_blank' className='bio-website'>
                www.google.com
              </Link>
            </S.ProfileWebsite>
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
