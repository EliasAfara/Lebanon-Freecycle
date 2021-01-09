import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateDonation, getSingleDonation } from '../actions/donations';
import { DonationsCategories } from '../shared/Categories';
import { Locations } from '../shared/Locations';
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
  address: '',
  locationName: '',
  longitude: '',
  latitude: '',
  district: '',
  googleMapLink: '',
};

const EditDonation = ({
  updateDonation,
  getSingleDonation,
  auth: { isAuthenticated, authLoading },
  donations: { singleDonations, redirectPage, editDonationFormLoading },
  match,
}) => {
  const [formData, setFormData] = useState(initialState);
  const [disableInput, setDisableInput] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const {
    name,
    category,
    description,
    phoneNumber,
    address,
    locationName,
    longitude,
    latitude,
    district,
    googleMapLink,
  } = formData;

  const userIDInParam = match.params.id;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLocation = (locationName) => {
    let locationDetails = Locations.filter(
      (location) => locationName === location.Location_Name_En
    );
    //console.log(locationDetails[0]);
    setFormData({
      ...formData,
      locationName: locationDetails[0].Location_Name_En,
      longitude: locationDetails[0].Longitude,
      latitude: locationDetails[0].Latitude,
      district: locationDetails[0].District,
      googleMapLink: locationDetails[0].Google_Map_link,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let filteredCategory = category.replace(/&/g, 'and');

    const data = {
      name,
      description,
      phoneNumber,
      category: filteredCategory,
      address,
      locationName,
      longitude,
      latitude,
      district,
      googleMapLink,
    };

    //console.log(data);
    updateDonation(data, userIDInParam);
  };

  useEffect(() => {
    if (redirectPage === true) {
      setRedirect(true);
    } else {
      getSingleDonation(userIDInParam);
    }
  }, [getSingleDonation, userIDInParam, redirectPage]);

  useEffect(() => {
    if (isAuthenticated && !authLoading && singleDonations) {
      const requesteData = { ...initialState };
      for (const key in singleDonations) {
        if (key in requesteData) requesteData[key] = singleDonations[key];
      }
      for (const key in singleDonations.location) {
        if (key in requesteData)
          requesteData[key] = singleDonations.location[key];
      }
      setFormData(requesteData);
    }
    if (singleDonations && singleDonations.status === 'Completed') {
      setDisableInput(true);
    }
  }, [isAuthenticated, authLoading, singleDonations]);

  if (redirect) {
    return <Redirect to={`/donation/${userIDInParam}`} />;
  }

  return (
    <>
      {editDonationFormLoading ? (
        <Spinner />
      ) : (
        <>
          <Styled.FormContainer__Div>
            <Styled.FormWrapper__Div>
              <Styled.SectionTitle__Div>
                Update Donation
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
                      Location<span className='required'> *</span>
                    </Styled.FieldName__Label>
                  </Styled.FieldLabel__Div>

                  <div className='form__custom-select'>
                    <Select
                      showSearch
                      size={'large'}
                      style={{ width: '100%', height: '100%' }}
                      placeholder='Select Location'
                      defaultActiveFirstOption={false}
                      optionFilterProp='children'
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={handleLocation}
                      autoComplete='chrome-off'
                      value={locationName}
                      required
                    >
                      {Locations.map((location, index) => {
                        return (
                          <Option key={index} value={location.Location_Name_En}>
                            {location.Location_Name_En +
                              ' - ' +
                              location.District}
                          </Option>
                        );
                      })}
                    </Select>
                  </div>
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
                      {DonationsCategories.map((category) => {
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
                  <Styled.FieldLabel__Div>
                    <Styled.FieldName__Label>
                      Address<span className='required'> *</span>
                    </Styled.FieldName__Label>
                  </Styled.FieldLabel__Div>

                  <Styled.FieldInput__Input
                    name='address'
                    value={address}
                    onChange={(e) => handleChange(e)}
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

EditDonation.propTypes = {
  auth: PropTypes.object.isRequired,
  getSingleDonation: PropTypes.func.isRequired,
  updateDonation: PropTypes.func.isRequired,
  donations: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  donations: state.donations,
});

export default connect(mapStateToProps, { getSingleDonation, updateDonation })(
  EditDonation
);
