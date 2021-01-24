import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import loadable, { lazy } from '@loadable/component';

import { updatePassword } from '../../actions/profile';
import { validateChangePasswordForm } from '../../utils/validateForm';

import * as S from './styles';

const FormContainer = lazy(() => import('../../common/FormContainer'));
const InputV2 = loadable(() => import('../../common/InputV2'));
const Button = loadable(() => import('../../common/Button'));

const initialState = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

const ChangePassword = ({ updatePassword, profile: { error } }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Destructing
  const { oldPassword, newPassword, confirmNewPassword } = formData;

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];

    if (errors[type]) {
      return <S.Span>{ErrorMessage}</S.Span>;
    } else {
      return <span />;
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && error.constructor === Object) {
      setFormData(initialState);
    }
  }, [error]);

  const handleChange = (e) => {
    e.persist();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Reset Errors
    setErrors((errors) => ({ ...errors, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentErrors = validateChangePasswordForm(formData);
    setErrors(currentErrors);

    console.log(currentErrors);

    // console.log(formData);
    if (Object.keys(currentErrors).length === 0) {
      updatePassword(formData);
    }
  };

  return (
    <div style={{ maxWidth: '600px', width: 'inherit' }}>
      <S.FormContainer__Div>
        <Suspense fallback={<div>Loading...</div>}>
          <FormContainer>
            <S.FormTitle>Update Your Password</S.FormTitle>
            <form onSubmit={(e) => handleSubmit(e)}>
              <>
                <InputV2
                  InputType={'Normal'}
                  label='Old Password'
                  type='password'
                  name='oldPassword'
                  placeholder='Old password'
                  value={oldPassword}
                  onChange={(e) => handleChange(e)}
                  isRequired={true}
                  isInvalid={errors.oldPassword}
                  errorMessage={<ValidationType type='oldPassword' />}
                />
              </>
              <>
                <InputV2
                  InputType={'Normal'}
                  label='New Password'
                  type='password'
                  name='newPassword'
                  placeholder='New password'
                  value={newPassword}
                  onChange={(e) => handleChange(e)}
                  isRequired={true}
                  isInvalid={errors.newPassword}
                  errorMessage={<ValidationType type='newPassword' />}
                />
              </>

              <>
                <InputV2
                  InputType={'Normal'}
                  label='Confirm New Password'
                  type='password'
                  name='confirmNewPassword'
                  placeholder='Confirm New password'
                  value={confirmNewPassword}
                  onChange={(e) => handleChange(e)}
                  isRequired={true}
                  isInvalid={errors.confirmNewPassword}
                  errorMessage={<ValidationType type='confirmNewPassword' />}
                />
              </>

              <S.FormField__Div>
                <S.RequiredMessage__Div>
                  <span className='all-fields-required'>
                    All fields with <span className='required'> *</span> are
                    required
                  </span>
                </S.RequiredMessage__Div>

                <S.ButtonContainer>
                  <Button type='submit' value={<>Update</>} />
                </S.ButtonContainer>
              </S.FormField__Div>
            </form>
          </FormContainer>
        </Suspense>
      </S.FormContainer__Div>
    </div>
  );
};

ChangePassword.propTypes = {
  updatePassword: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { updatePassword })(ChangePassword);
