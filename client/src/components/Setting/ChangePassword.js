import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Styled from '../StyledComponents/StyledForm';

import { updatePassword } from '../../actions/profile';

const initialState = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

const ChangePassword = ({ updatePassword, profile: { error } }) => {
  const [formData, setFormData] = useState(initialState);

  // Destructing
  const { oldPassword, newPassword, confirmNewPassword } = formData;

  useEffect(() => {
    if (Object.keys(error).length === 0 && error.constructor === Object) {
      setFormData(initialState);
    }
  }, [error]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // This way we can handleChange on every field
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    updatePassword(formData);
  };

  return (
    <div style={{ maxWidth: '600px', width: 'inherit' }}>
      <Styled.FormContainer__Div>
        <Styled.FormWrapper__Div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>
                  Old Password<span className='required'> *</span>
                </Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Input
                autocomplete='off'
                name='oldPassword'
                value={oldPassword}
                onChange={(e) => handleChange(e)}
                type='password'
                required
              />
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>
                  New Password<span className='required'> *</span>
                </Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Input
                autocomplete='off'
                name='newPassword'
                value={newPassword}
                onChange={(e) => handleChange(e)}
                type='password'
                required
              />
            </Styled.FormField__Div>

            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>
                  Confirm New Password<span className='required'> *</span>
                </Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Input
                autocomplete='off'
                name='confirmNewPassword'
                value={confirmNewPassword}
                onChange={(e) => handleChange(e)}
                type='password'
                required
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
