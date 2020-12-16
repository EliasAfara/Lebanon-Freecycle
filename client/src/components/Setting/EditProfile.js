import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RiInformationLine } from 'react-icons/ri';
import * as Styled from '../StyledComponents/StyledForm';
import * as ProfileForm from './SettingElements';

const EditProfile = ({ auth: { user } }) => {
  return (
    <Styled.FormContainer__Div>
      <Styled.FormWrapper__Div>
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

        <form encType='multipart/form-data'>
          <Styled.FormField__Div>
            <Styled.FieldLabel__Div>
              <Styled.FieldName__Label>Name</Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <Styled.FieldInput__Input
              name='name'
              type='text'
              placeholder='Name'
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
                  <i className='fab fa-instagram fa-2x' aria-hidden='true'></i>
                </ProfileForm.SocialIcons>
              </Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <Styled.FieldInput__Input
              name='instagram'
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
              placeholder='Twitter URL'
            />
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <Styled.RequiredMessage__Div>
              <span className='all-fields-required'>
                All fields with <span className='required'> *</span> are
                required
              </span>
            </Styled.RequiredMessage__Div>

            <input type='submit' value='Submit' className='submit__btn' />
          </Styled.FormField__Div>
        </form>
      </Styled.FormWrapper__Div>
    </Styled.FormContainer__Div>
  );
};

EditProfile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(EditProfile);
