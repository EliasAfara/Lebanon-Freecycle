import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadable, { lazy } from '@loadable/component';

import { updateProfile, deleteAccount } from '../../actions/profile';
import { validateEditProfileForm } from '../../utils/validateForm';

import * as S from './styles';
import * as ProfileForm from './SettingElements';

import { RiInformationLine } from 'react-icons/ri';
// Ant Design Delete Model
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const FormContainer = lazy(() => import('../../common/FormContainer'));
const InputV2 = loadable(() => import('../../common/InputV2'));
const Button = loadable(() => import('../../common/Button'));

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
  const [errors, setErrors] = useState({});
  const {
    fullname,
    username,
    email,
    bio,
    facebook,
    twitter,
    instagram,
  } = formData;

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];

    if (errors[type]) {
      return <S.Span>{ErrorMessage}</S.Span>;
    } else {
      return <span />;
    }
  };

  const handleChange = (e) => {
    e.persist();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Reset Errors
    setErrors((errors) => ({ ...errors, [e.target.name]: '' }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);
    const currentErrors = validateEditProfileForm(formData);
    setErrors(currentErrors);

    // console.log(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      updateProfile(formData, history);
    }
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
        deleteAccount(user._id);
      },
      onCancel() {},
    });
  };

  return (
    <div style={{ maxWidth: '600px', width: 'inherit' }}>
      <S.FormContainer__Div>
        <Suspense fallback={<div>Loading...</div>}>
          <FormContainer>
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
              <>
                <InputV2
                  InputType={'Normal'}
                  label='Full Name'
                  type='text'
                  name='fullname'
                  placeholder='Full Name'
                  value={fullname}
                  onChange={(e) => handleChange(e)}
                  isRequired={true}
                  isInvalid={errors.fullname}
                  errorMessage={<ValidationType type='fullname' />}
                />
              </>

              <>
                <InputV2
                  InputType={'Normal'}
                  label='Username'
                  type='text'
                  name='username'
                  placeholder='Username'
                  value={username}
                  onChange={(e) => handleChange(e)}
                  isRequired={true}
                  isInvalid={errors.username}
                  errorMessage={<ValidationType type='username' />}
                />
              </>

              <>
                <InputV2
                  InputType={'Textarea'}
                  label='Bio'
                  type='text'
                  name='bio'
                  placeholder='Bio'
                  value={bio}
                  onChange={(e) => handleChange(e)}
                  isRequired={false}
                  isInvalid={errors.bio}
                  errorMessage={<ValidationType type='bio' />}
                />
              </>

              <S.FormField__Div>
                <div className='asideTweek'></div>
                <span className='sectionSubTitle'>
                  <RiInformationLine /> &nbsp;<span>Personal Information</span>
                </span>
              </S.FormField__Div>

              <>
                <InputV2
                  InputType={'Normal'}
                  label='Email'
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => handleChange(e)}
                  isRequired={true}
                  isInvalid={errors.email}
                  errorMessage={<ValidationType type='email' />}
                />
              </>

              <S.FormField__Div>
                <div className='asideTweek'></div>
                <span className='sectionSubTitle'>
                  <RiInformationLine /> &nbsp;<span>Social Network Links</span>
                </span>
              </S.FormField__Div>

              <>
                <InputV2
                  InputType={'Normal'}
                  label='Facebook'
                  type='text'
                  name='facebook'
                  placeholder='Facebook URL'
                  value={facebook}
                  onChange={(e) => handleChange(e)}
                  isRequired={false}
                />
              </>
              <>
                <InputV2
                  InputType={'Normal'}
                  label='Instagram'
                  type='text'
                  name='instagram'
                  placeholder='Instagram URL'
                  value={instagram}
                  onChange={(e) => handleChange(e)}
                  isRequired={false}
                />
              </>
              <>
                <InputV2
                  InputType={'Normal'}
                  label='Twitter'
                  type='text'
                  name='twitter'
                  placeholder='Twitter URL'
                  value={twitter}
                  onChange={(e) => handleChange(e)}
                  isRequired={false}
                />
              </>

              <S.FormField__Div>
                <ProfileForm.RequiredMessage__Div>
                  <span className='all-fields-required'>
                    All fields with <span className='required'> *</span> are
                    required
                  </span>
                </ProfileForm.RequiredMessage__Div>

                <ProfileForm.ActionsContainer__Div>
                  <S.ButtonContainer>
                    <Button type='submit' value={<>Update</>} />
                  </S.ButtonContainer>
                </ProfileForm.ActionsContainer__Div>
              </S.FormField__Div>
            </form>
          </FormContainer>
          <FormContainer>
            <ProfileForm.DeleteAccount__Div>
              <ProfileForm.DeleteAccount__Button
                type='button'
                onClick={handleDelete}
              >
                Delete my account
              </ProfileForm.DeleteAccount__Button>
            </ProfileForm.DeleteAccount__Div>
          </FormContainer>
        </Suspense>
      </S.FormContainer__Div>
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
