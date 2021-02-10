import React, { useEffect, useState, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadable, { lazy } from '@loadable/component';

import { updateDonation, getSingleDonation } from '../../actions/donations';
import { DonationsCategories } from '../../shared/Categories';
import { Locations } from '../../shared/Locations';
import { validateDonationsForm } from '../../utils/validateForm';

import Spinner from '../Spinner/Spinner';
import { RiInformationLine } from 'react-icons/ri';
import { Space, Spin } from 'antd';

import * as S from './styles';

const FormContainer = lazy(() => import('../../common/FormContainer'));
const InputV2 = loadable(() => import('../../common/InputV2'));
const Button = loadable(() => import('../../common/Button'));

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
  const [errors, setErrors] = useState({});

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

  const handleCategoryChange = (cat) => {
    setFormData({
      ...formData,
      category: cat,
    });
    // Reset Errors
    setErrors((errors) => ({ ...errors, category: '' }));
  };

  const handlePhoneNumberChange = (phoneNbr) => {
    setFormData({
      ...formData,
      phoneNumber: phoneNbr,
    });
    // Reset Errors
    setErrors((errors) => ({ ...errors, phoneNumber: '' }));
  };

  const handleLocation = (locationName) => {
    let locationDetails = Locations.filter(
      (location) => locationName === location.Location_Name_En
    );
    // console.log(locationDetails[0]);
    setFormData({
      ...formData,
      locationName: locationDetails[0].Location_Name_En,
      longitude: locationDetails[0].Longitude,
      latitude: locationDetails[0].Latitude,
      district: locationDetails[0].District,
      googleMapLink: locationDetails[0].Google_Map_link,
    });

    // Reset Errors
    setErrors((errors) => ({ ...errors, locationName: '' }));
  };

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
    const currentErrors = validateDonationsForm(data);
    setErrors(currentErrors);

    // console.log(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      updateDonation(data, userIDInParam);
    }
  };

  useEffect(() => {
    if (redirectPage === true) {
      setRedirect(true);
    } else {
      if (!singleDonations) {
        getSingleDonation(userIDInParam);
      } else if (userIDInParam !== singleDonations._id) {
        getSingleDonation(userIDInParam);
      }
    }
  }, [getSingleDonation, singleDonations, userIDInParam, redirectPage]);

  useEffect(() => {
    if (isAuthenticated && !authLoading && singleDonations) {
      const donationData = { ...initialState };
      for (const key in singleDonations) {
        if (key in donationData) donationData[key] = singleDonations[key];
      }
      for (const key in singleDonations.location) {
        if (key in donationData)
          donationData[key] = singleDonations.location[key];
      }
      setFormData(donationData);
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
          <S.FormContainer__Div>
            <Suspense
              fallback={
                <div style={{ textAlign: 'center' }}>
                  <Space size='middle'>
                    <Spin size='large' />
                  </Space>
                </div>
              }
            >
              <FormContainer>
                <S.FormTitle>Update Your Donation</S.FormTitle>

                <form
                  encType='multipart/form-data'
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <S.FormField__Div>
                    <div className='asideTweek'></div>
                    <span className='sectionSubTitle'>
                      <RiInformationLine /> &nbsp;
                      <span>Donation Information</span>
                    </span>
                  </S.FormField__Div>

                  <>
                    <InputV2
                      InputType={'Normal'}
                      label='Name'
                      type='text'
                      name='name'
                      placeholder='Name'
                      value={name}
                      onChange={(e) => handleChange(e)}
                      isRequired={true}
                      isInvalid={errors.name}
                      errorMessage={<ValidationType type='name' />}
                    />
                  </>

                  <>
                    <InputV2
                      InputType={'AntSelectLocation'}
                      label='Location'
                      locationData={Locations}
                      onChange={handleLocation}
                      value={locationName}
                      isRequired={true}
                      isInvalid={errors.locationName}
                      errorMessage={<ValidationType type='locationName' />}
                    />
                  </>

                  <>
                    <InputV2
                      InputType={'AntSelectCategory'}
                      label='Category'
                      CategoriesData={DonationsCategories}
                      value={category}
                      onChange={handleCategoryChange}
                      isRequired={true}
                      isInvalid={errors.category}
                      errorMessage={<ValidationType type='category' />}
                    />
                  </>

                  <>
                    <InputV2
                      InputType={'Textarea'}
                      label='Description'
                      type='text'
                      name='description'
                      placeholder='Description'
                      value={description}
                      onChange={(e) => handleChange(e)}
                      isRequired={true}
                      isInvalid={errors.description}
                      errorMessage={<ValidationType type='description' />}
                    />
                  </>

                  <S.FormField__Div>
                    <div className='asideTweek'></div>
                    <span className='sectionSubTitle'>
                      <RiInformationLine /> &nbsp;
                      <span>Contact Information</span>
                    </span>
                  </S.FormField__Div>

                  <>
                    <InputV2
                      InputType={'PhoneInput'}
                      label='Phone Number'
                      type='tel'
                      name='phoneNumber'
                      placeholder=''
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      isRequired={true}
                      isInvalid={errors.phoneNumber}
                      errorMessage={<ValidationType type='phoneNumber' />}
                    />
                  </>

                  <>
                    <InputV2
                      InputType={'Normal'}
                      label='Address'
                      type='text'
                      name='address'
                      placeholder='Address'
                      value={address}
                      onChange={(e) => handleChange(e)}
                      isRequired={true}
                      isInvalid={errors.address}
                      errorMessage={<ValidationType type='address' />}
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
                      <Button
                        type='submit'
                        value={<>Update</>}
                        disabled={disableInput}
                      />
                    </S.ButtonContainer>
                  </S.FormField__Div>
                </form>
              </FormContainer>
            </Suspense>
          </S.FormContainer__Div>
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
