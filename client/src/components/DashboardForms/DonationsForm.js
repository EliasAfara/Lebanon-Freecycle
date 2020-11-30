import React from 'react';
//import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import './DashboardForms.css';
import { FcRules } from 'react-icons/fc';
import { RiInformationLine } from 'react-icons/ri';
import * as Styled from '../StyledComponents/StyledForm';

const DonationsForm = (props) => {
  return (
    <Styled.FormContainer__Div>
      <Styled.FormGuidelines__Div>
        <Styled.SectionTitle__Div>
          <FcRules />
          &nbsp; Guidelines
        </Styled.SectionTitle__Div>
        Please Provide Valid Information
      </Styled.FormGuidelines__Div>

      <Styled.FormWrapper__Div>
        <Styled.SectionTitle__Div>Provide a Donation</Styled.SectionTitle__Div>

        <form encType='multipart/form-data'>
          <Styled.FormField__Div>
            <div className='asideTweek'></div>
            <span className='sectionSubTitle'>
              <RiInformationLine /> &nbsp;<span>Item Information</span>
            </span>
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <Styled.FieldLabel__Div>
              <Styled.FieldName__Label>
                Image(s)<span className='required'> *</span>
              </Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <Styled.FileField__Div>
              <Styled.FileInput__Input type='file' id='FileUpload' />
              <label
                className='custom-file-label'
                htmlFor='FileUpload'
                style={{
                  width: '100%',
                  borderRadius: '3px',
                  fontSize: '14px',
                  fontWeight: '400',
                }}
              >
                Choose file
              </label>
            </Styled.FileField__Div>
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <Styled.FieldLabel__Div>
              <Styled.FieldName__Label>
                Name<span className='required'> *</span>
              </Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <Styled.FieldInput__Input
              name='name'
              type='text'
              placeholder='Name'
              required
            />
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <Styled.FieldLabel__Div>
              <Styled.FieldName__Label>
                Location<span className='required'> *</span>
              </Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <div className='form__custom-select'>
              <select name='state' required>
                <option value=''>Select</option>
                <option value='Tyre'>Tyre</option>
                <option value='Beirut'>Beirut</option>
              </select>
            </div>
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <Styled.FieldLabel__Div>
              <Styled.FieldName__Label>
                Category<span className='required'> *</span>
              </Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <div className='form__custom-select'>
              <select name='category' required>
                <option value=''>Select</option>
                <option value='Forniture'>Forniture</option>
                <option value='Clothes'>Clothes</option>
                <option value='Food'>Food</option>
                <option value='Books'>Books</option>
              </select>
            </div>
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <Styled.FieldLabel__Div>
              <Styled.FieldName__Label>
                Condition<span className='required'> *</span>
              </Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <div className='form__custom-select'>
              <select name='condition' required>
                <option value=''>Select</option>
                <option value='Used'>Used</option>
                <option value='Brand New'>Brand New</option>
              </select>
            </div>
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <Styled.FieldLabel__Div>
              <Styled.FieldName__Label>
                Description<span className='required'> *</span>
              </Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <Styled.FieldInput__Textarea
              name='description'
              placeholder='Description'
            ></Styled.FieldInput__Textarea>
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <div className='asideTweek'></div>
            <span className='sectionSubTitle'>
              <RiInformationLine /> &nbsp;<span>Contact Information</span>
            </span>
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <Styled.FieldLabel__Div>
              <Styled.FieldName__Label>
                Phone Number<span className='required'> *</span>
              </Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <PhoneInput
              country={'lb'}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false,
              }}
              isValid={(value, country) => {
                if (value.match(/12345/)) {
                  return 'Invalid value: ' + value + ', ' + country.name;
                } else if (value.match(/1234/)) {
                  return false;
                } else {
                  return true;
                }
              }}
              placeholder='e.g. 78845230'
              autoFormat={false}
              disableDropdown={true}
              disableCountryCode={true}
              disableSearchIcon={true}
              disableCountryGuess={true}
            />

            {/* <Styled.FieldInput__Input
              name='phoneNumber'
              type='tel'
              placeholder='Phone Number e.g. 78 845 230'
              required
            /> */}
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <Styled.FieldLabel__Div>
              <Styled.FieldName__Label>
                Address<span className='required'> *</span>
              </Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <Styled.FieldInput__Input
              name='address'
              type='text'
              placeholder='Address'
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
  );
};

//DonationForm.propTypes = {};

export default DonationsForm;

// style = 'object-fit: cover;';

// sizes = '600px';
// srcset="";
// tabindex="";
