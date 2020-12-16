import React from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux';
import * as Styled from '../StyledComponents/StyledForm';

const ChangePassword = (props) => {
  return (
    <div>
      <Styled.FormContainer__Div>
        <Styled.FormWrapper__Div>
          <form encType='multipart/form-data'>
            <Styled.FormField__Div>
              <Styled.FieldLabel__Div>
                <Styled.FieldName__Label>
                  Old Password<span className='required'> *</span>
                </Styled.FieldName__Label>
              </Styled.FieldLabel__Div>

              <Styled.FieldInput__Input
                autocomplete='off'
                name='oldPassword'
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

// ChangePassword.propTypes = {

// }

export default ChangePassword;
