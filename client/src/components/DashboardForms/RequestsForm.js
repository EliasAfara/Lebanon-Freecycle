import React from 'react';
//import PropTypes from 'prop-types';
import './DashboardForms.css';
import PhoneInput from 'react-phone-input-2';
import * as Styled from '../StyledComponents/StyledForm';
import { FcRules } from 'react-icons/fc';
import { RiInformationLine } from 'react-icons/ri';

const RequestsForm = (props) => {
  return (
    <Styled.FormContainer__Div>
      <Styled.FormGuidelines__Div>
        <Styled.SectionTitle__Div>
          <FcRules />
          &nbsp; Guidelines
        </Styled.SectionTitle__Div>
        <h4>Please Provide Valid Information</h4>
        <p>
          One can ask for any kind of item he/she in need of. However,
          submitting a request does not mean that you will definetly get that
          item for free.
        </p>
      </Styled.FormGuidelines__Div>

      <Styled.FormWrapper__Div>
        <Styled.SectionTitle__Div>Request An Item</Styled.SectionTitle__Div>

        <form encType='multipart/form-data'>
          <Styled.FormField__Div>
            <div className='asideTweek'></div>
            <span className='sectionSubTitle'>
              <RiInformationLine /> &nbsp;<span>Item Information</span>
            </span>
          </Styled.FormField__Div>

          <Styled.FormField__Div>
            <Styled.FieldLabel__Div>
              <Styled.FieldName__Label>Image(s)</Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <Styled.FileField__Div>
              <Styled.FileInput__Input type='file' id='FileUpload' />
              <label
                className='custom-file-label'
                htmlFor='customFile'
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
                <option value='Others'>Others</option>
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
              <Styled.FieldName__Label>Phone Number</Styled.FieldName__Label>
            </Styled.FieldLabel__Div>

            <PhoneInput
              country={'lb'}
              onlyCountries={['lb']}
              masks={{ lb: '.. ... ...' }}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false,
              }}
              placeholder='+961 71 123 456'
              countryCodeEditable={false}
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

//RequestsForm.propTypes = {};

export default RequestsForm;
