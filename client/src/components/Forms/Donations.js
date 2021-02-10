import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loadable, { lazy } from '@loadable/component';

import useImagesHandler from '../../costumeHooks/useImagesHandler';
import { createDonation } from '../../actions/donations';
import { DonationsCategories } from '../../shared/Categories';
import { Locations } from '../../shared/Locations';
import { validateDonationsForm } from '../../utils/validateForm';

import './DashboardForms.css';
import * as S from './styles';

import { Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { RiInformationLine } from 'react-icons/ri';

const FormContainer = lazy(() => import('../../common/FormContainer'));
const InputV2 = loadable(() => import('../../common/InputV2'));
const Button = loadable(() => import('../../common/Button'));

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
const Donations = ({
  createDonation,
  donations: { redirectPage, createDonationFormLoading },
}) => {
  const {
    handleFileInputChange,
    imagesConatiner,
    imagesErrors,
  } = useImagesHandler();

  const [formData, setFormData] = useState(initialState);
  const [formLoading, setFormLoading] = useState(false);

  const {
    name,
    description,
    phoneNumber,
    address,
    locationName,
    longitude,
    latitude,
    district,
    googleMapLink,
  } = formData;
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState({});
  const ImagesRequired = true;

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    const ImagesErrorMessage = imagesErrors[type];

    if (errors[type]) {
      return <S.Span>{ErrorMessage}</S.Span>;
    } else if (imagesErrors[type]) {
      return <S.Span>{ImagesErrorMessage}</S.Span>;
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

    let filteredCategory = formData.category.replace(/&/g, 'and');
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
      imagesConatiner,
    };

    const currentErrors = validateDonationsForm(data);
    setErrors(currentErrors);

    if (ImagesRequired && imagesConatiner.length === 0) {
      imagesErrors.imagesRequiredError =
        'You are required to select at most 3 images';
    }
    // console.log(currentErrors);
    // console.log(imagesErrors);

    //console.log(data);
    if (
      Object.keys(currentErrors).length === 0 &&
      imagesErrors.imagesRequiredError.length === 0
    ) {
      createDonation(data);
    }
  };

  useEffect(() => {
    if (createDonationFormLoading) {
      setFormLoading(true);
    } else {
      setFormLoading(false);
    }

    if (redirectPage === true) {
      setRedirect(true);
      setFormLoading(false);
    }
  }, [createDonationFormLoading, redirectPage]);

  if (redirect) {
    return <Redirect to='/donations' />;
  }

  return (
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
          <S.FormTitle>Provide a Donation</S.FormTitle>

          <form
            encType='multipart/form-data'
            onSubmit={(e) => handleSubmit(e)}
            noValidate
          >
            <S.FormField__Div>
              <div className='asideTweek'></div>
              <span className='sectionSubTitle'>
                <RiInformationLine /> &nbsp;<span>Item Information</span>
              </span>
            </S.FormField__Div>

            <>
              <InputV2
                InputType={'ImagesInput'}
                label='Image(s)'
                onChange={handleFileInputChange}
                isRequired={ImagesRequired}
                isInvalid={imagesErrors.imagesRequiredError}
                imagesLabel={
                  imagesConatiner.length > 0 ? (
                    imagesConatiner.length > 1 ? (
                      <span style={{ color: 'green', borderColor: 'green' }}>
                        {imagesConatiner.length} images selected
                      </span>
                    ) : (
                      <span style={{ color: 'green', borderColor: 'green' }}>
                        {imagesConatiner.length} image selected
                      </span>
                    )
                  ) : (
                    <>Select images</>
                  )
                }
                errorMessage={<ValidationType type='imagesRequiredError' />}
              />
            </>

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
                <RiInformationLine /> &nbsp;<span>Contact Information</span>
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
              <div className='form__footer-wrapper'>
                <S.ButtonContainer>
                  <Button
                    type='submit'
                    value={
                      formLoading ? (
                        <>
                          <Spin
                            indicator={antIcon}
                            style={{
                              color: 'inherit',
                              fontSize: 'inherit',
                              marginRight: '5px',
                            }}
                          />{' '}
                          Submitting...
                        </>
                      ) : (
                        <>Submit</>
                      )
                    }
                    disabled={formLoading}
                  />
                </S.ButtonContainer>
              </div>
            </S.FormField__Div>
          </form>
        </FormContainer>
      </Suspense>
    </S.FormContainer__Div>
  );
};

Donations.propTypes = {
  createDonation: PropTypes.func.isRequired,
  donations: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  donations: state.donations,
});

export default connect(mapStateToProps, {
  createDonation,
})(Donations);
