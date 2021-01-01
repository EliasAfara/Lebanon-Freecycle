import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateRequest, getSingleRequest } from '../actions/requests';
import { RequestCategories } from '../shared/Categories';
import * as Styled from '../components/StyledComponents/StyledForm';
import PhoneInput from 'react-phone-input-2';
import { RiInformationLine } from 'react-icons/ri';
import { Select } from 'antd';

import Spinner from '../components/Spinner/Spinner';
const { Option } = Select;

const initialState = {
  name: '',
  category: '',
  description: '',
  phoneNumber: '',
};

const EditRequest = ({
  updateRequest,
  getSingleRequest,
  auth: { isAuthenticated, authLoading },
  requests: { singleRequests, redirectPage, editRequestFormLoading },
  match,
}) => {
  const [formData, setFormData] = useState(initialState);
  const [disableInput, setDisableInput] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { name, category, description, phoneNumber } = formData;

  const userIDInParam = match.params.id;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formData);
    updateRequest(formData, userIDInParam);
  };

  useEffect(() => {
    if (redirectPage === true) {
      setRedirect(true);
    } else {
      getSingleRequest(userIDInParam);
    }
  }, [getSingleRequest, userIDInParam, redirectPage]);

  useEffect(() => {
    if (isAuthenticated && !authLoading) {
      const requesteData = { ...initialState };
      for (const key in singleRequests) {
        if (key in requesteData) requesteData[key] = singleRequests[key];
      }
      setFormData(requesteData);
    }
    if (singleRequests && singleRequests.status === 'Completed') {
      setDisableInput(true);
    }
  }, [isAuthenticated, authLoading, singleRequests]);

  if (redirect) {
    return <Redirect to={`/request/${userIDInParam}`} />;
  }

  return (
    <>
      {editRequestFormLoading ? (
        <Spinner />
      ) : (
        <>
          <Styled.FormContainer__Div>
            <Styled.FormWrapper__Div>
              <Styled.SectionTitle__Div>
                Update Request
              </Styled.SectionTitle__Div>

              <form
                encType='multipart/form-data'
                onSubmit={(e) => handleSubmit(e)}
              >
                <Styled.FormField__Div>
                  <div className='asideTweek'></div>
                  <span className='sectionSubTitle'>
                    <RiInformationLine /> &nbsp;<span>Request Information</span>
                  </span>
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
                    disabled={disableInput}
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
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      value={category}
                      onChange={(category) =>
                        setFormData({
                          ...formData,
                          category: category,
                        })
                      }
                      disabled={disableInput}
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
                    disabled={disableInput}
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
                    <Styled.FieldName__Label>
                      Phone Number
                    </Styled.FieldName__Label>
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
                    disabled={disableInput}
                  />
                </Styled.FormField__Div>

                <Styled.FormField__Div>
                  <Styled.RequiredMessage__Div>
                    <span className='all-fields-required'>
                      All fields with <span className='required'> *</span> are
                      required
                    </span>
                  </Styled.RequiredMessage__Div>

                  <input
                    type='submit'
                    value='Submit'
                    className='submit__btn'
                    disabled={disableInput}
                    style={{
                      filter: `contrast(${disableInput ? 50 : ''}%)`,
                    }}
                  />
                </Styled.FormField__Div>
              </form>
            </Styled.FormWrapper__Div>
          </Styled.FormContainer__Div>
        </>
      )}
    </>
  );
};

EditRequest.propTypes = {
  auth: PropTypes.object.isRequired,
  getSingleRequest: PropTypes.func.isRequired,
  updateRequest: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  requests: state.requests,
});

export default connect(mapStateToProps, { getSingleRequest, updateRequest })(
  EditRequest
);
