import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRequest } from '../../actions/requests';
import { Redirect } from 'react-router-dom';

import './DashboardForms.css';
import { RequestCategories } from '../../shared/Categories';
import PhoneInput from 'react-phone-input-2';
import * as Styled from '../StyledComponents/StyledForm';
import { FcRules } from 'react-icons/fc';
import { RiInformationLine } from 'react-icons/ri';
import { Select } from 'antd';
const { Option } = Select;

const initialState = {
  name: '',
  category: '',
  description: '',
  phoneNumber: '',
};

const RequestsForm = ({ createRequest, requests: { redirectPage } }) => {
  const [formData, setFormData] = useState(initialState);
  const [redirect, setRedirect] = useState(false);

  const { name, description, phoneNumber } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    createRequest(formData);
  };

  useEffect(() => {
    console.log(redirectPage);
    if (redirectPage === true) {
      setRedirect(true);
    }
  }, [redirectPage]);

  if (redirect) {
    return <Redirect to='/requests' />;
  }

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

        <form encType='multipart/form-data' onSubmit={(e) => handleSubmit(e)}>
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
              value={name}
              onChange={(e) => handleChange(e)}
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
              <Select
                showSearch
                size={'large'}
                style={{ width: '100%', height: '100%' }}
                placeholder='Select Category'
                dropdownMatchSelectWidth={false}
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                onChange={(category) =>
                  setFormData({
                    ...formData,
                    category: category,
                  })
                }
                required
              >
                {RequestCategories.map((category) => {
                  return (
                    <Option key={category.id} value={category.title}>
                      {category.title}
                    </Option>
                  );
                })}
              </Select>
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
              value={description}
              onChange={(e) => handleChange(e)}
              required
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
                name: 'phoneNumber',
                required: true,
                autoFocus: false,
              }}
              placeholder='+961 71 123 456'
              countryCodeEditable={false}
              disableSearchIcon={true}
              disableCountryGuess={true}
              value={phoneNumber}
              onChange={(phone) =>
                setFormData({
                  ...formData,
                  phoneNumber: phone,
                })
              }
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

RequestsForm.propTypes = {
  createRequest: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  requests: state.requests,
});

export default connect(mapStateToProps, { createRequest })(RequestsForm);
