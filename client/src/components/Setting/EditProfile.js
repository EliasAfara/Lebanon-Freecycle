import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RiInformationLine } from 'react-icons/ri';
import * as Styled from '../StyledComponents/StyledForm';
import * as ProfileForm from './SettingElements';

import { updateProfile, deleteAccount } from '../../actions/profile';

// Ant Design Delete Model
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const initialState = {
  fullname: '',
  username: '',
  email: '',
  bio: '',
  facebook: '',
  twitter: '',
  instagram: '',
};

const EditProfile = ({
  auth: { isAuthenticated, authLoading, user },
  updateProfile,
  deleteAccount,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (isAuthenticated && !authLoading) {
      const profileData = { ...initialState };
      for (const key in user) {
        if (key in profileData) profileData[key] = user[key];
      }
      for (const key in user.social) {
        if (key in profileData) profileData[key] = user.social[key];
      }
      setFormData(profileData);
    }
  }, [isAuthenticated, authLoading, user]);

  // Destructing
  const {
    fullname,
    username,
    email,
    bio,
    facebook,
    twitter,
    instagram,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // This way we can handleChange on every field
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formData);
    updateProfile(formData, history);
  };

  const handleDelete = () => {
    confirm({
      title: `${user && user.username} are you sure?`,
      icon: <ExclamationCircleOutlined />,
      content:
        'Do you really want to delete your account? This process cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      centered: true,
      maskClosable: true,

      onOk() {
        deleteAccount();
      },
      onCancel() {},
    });
  };

  return (
    <div style={{ maxWidth: '600px', width: 'inherit' }}>
      <Styled.FormContainer__Div>
        <Styled.FormWrapper__Div style={{ marginLeft: 0 }}>
          <ProfileForm.ProfileHeader__Div>
            <ProfileForm.PictureContainer__Div>
              <ProfileForm.UserIcon__Img
                src={user && user.avatar}
                title='Profile photo'
                alt={user && user.username}
                style={{ width: '50px', height: '50px' }}
                draggable='false'
              />
            </ProfileForm.PictureContainer__Div>
            <ProfileForm.ProfileHeaderText__Div>
              <span>{user && user.username}</span>
              <ProfileForm.ManageGravatar__Span>
                Manage your avatar using{' '}
                <a
                  href='https://gravatar.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='target-link'
                >
                  Gravatar
                </a>
                .
              </ProfileForm.ManageGravatar__Span>
            </ProfileForm.ProfileHeaderText__Div>
          </ProfileForm.ProfileHeader__Div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>Full Name</Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Input
                name='fullname'
                value={fullname}
                onChange={(e) => handleChange(e)}
                type='text'
                placeholder='Full Name'
              />
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>
                  Username<span className='required'> *</span>
                </Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Input
                name='username'
                value={username}
                onChange={(e) => handleChange(e)}
                type='text'
                placeholder='Userame'
                required
              />
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>Bio</Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Textarea
                name='bio'
                value={bio}
                onChange={(e) => handleChange(e)}
                spellcheck='true'
              ></Styled.FieldInput__Textarea>
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <div className='asideTweek'></div>
              <span className='sectionSubTitle'>
                <RiInformationLine /> &nbsp;<span>Personal Information</span>
              </span>
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>
                  Email<span className='required'> *</span>
                </Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Input
                name='email'
                type='text'
                value={email}
                onChange={(e) => handleChange(e)}
                placeholder='Email'
                required
              />
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <div className='asideTweek'></div>
              <span className='sectionSubTitle'>
                <RiInformationLine /> &nbsp;<span>Social Network Links</span>
              </span>
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>
                  <ProfileForm.SocialIconsName>
                    Facebook
                  </ProfileForm.SocialIconsName>
                  <ProfileForm.SocialIcons>
                    <i className='fab fa-facebook fa-2x' aria-hidden='true'></i>
                  </ProfileForm.SocialIcons>
                </Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Input
                name='facebook'
                value={facebook}
                onChange={(e) => handleChange(e)}
                type='text'
                placeholder='Facebook URL'
              />
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>
                  <ProfileForm.SocialIconsName>
                    Instagram
                  </ProfileForm.SocialIconsName>
                  <ProfileForm.SocialIcons>
                    <i
                      className='fab fa-instagram fa-2x'
                      aria-hidden='true'
                    ></i>
                  </ProfileForm.SocialIcons>
                </Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Input
                name='instagram'
                value={instagram}
                onChange={(e) => handleChange(e)}
                type='text'
                placeholder='Instagram URL'
              />
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>
                  <ProfileForm.SocialIconsName>
                    Twitter
                  </ProfileForm.SocialIconsName>
                  <ProfileForm.SocialIcons>
                    <i className='fab fa-twitter fa-2x' aria-hidden='true'></i>
                  </ProfileForm.SocialIcons>
                </Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Input
                name='twitter'
                type='text'
                value={twitter}
                onChange={(e) => handleChange(e)}
                placeholder='Twitter URL'
              />
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <ProfileForm.RequiredMessage__Div>
                <span className='all-fields-required'>
                  All fields with <span className='required'> *</span> are
                  required
                </span>
              </ProfileForm.RequiredMessage__Div>

              <ProfileForm.ActionsContainer__Div>
                <input
                  type='submit'
                  value='Submit'
                  style={{ marginTop: 0 }}
                  className='submit__btn'
                />

                <ProfileForm.DeleteAccount__Div>
                  <ProfileForm.DeleteAccount__Button
                    type='button'
                    onClick={handleDelete}
                  >
                    Delete my account
                  </ProfileForm.DeleteAccount__Button>
                </ProfileForm.DeleteAccount__Div>
              </ProfileForm.ActionsContainer__Div>
            </Styled.FormField__Div>
          </form>
        </Styled.FormWrapper__Div>
      </Styled.FormContainer__Div>
    </div>
  );
};

EditProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateProfile, deleteAccount })(
  EditProfile
);
