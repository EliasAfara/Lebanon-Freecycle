import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createDonation, getAllDonations } from '../../actions/donations';
import { DonationsCategories } from '../../shared/Categories';
import { Locations } from '../../shared/Locations';
import { Redirect } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import './DashboardForms.css';
import { FcRules } from 'react-icons/fc';
import { RiInformationLine } from 'react-icons/ri';
import * as Styled from '../StyledComponents/StyledForm';
import { Select, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const { Option } = Select;
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
const DonationsForm = ({
  createDonation,
  getAllDonations,
  donations: { redirectPage, createDonationFormLoading },
}) => {
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
  const [selectedImages, setSelectedImages] = useState({});
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');

  let imagesArray = [];

  const handleFileInputChange = (e) => {
    imagesArray = Array.from(e.target.files);
    setSelectedImages({ ...imagesArray });
    if (imagesArray.length > 3) {
      setSelectedImages({});
      setImage1('');
      setImage2('');
      setImage3('');
      alert('You can only choose 3 images only');
    } else {
      //console.log(imagesArray);
      for (let i = 0; i < imagesArray.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(imagesArray[i]);
        reader.onloadend = () => {
          if (i === 0) {
            setImage1(reader.result);
          }
          if (i === 1) {
            setImage2(reader.result);
          }
          if (i === 2) {
            setImage3(reader.result);
          }
        };
      }
    }
  };

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
    console.log(locationDetails[0]);
    setFormData({
      ...formData,
      locationName: locationDetails[0].Location_Name_En,
      longitude: locationDetails[0].Longitude,
      latitude: locationDetails[0].Latitude,
      district: locationDetails[0].District,
      googleMapLink: locationDetails[0].Google_Map_link,
    });
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let filteredCategory = formData.category.replace(/&/g, 'and');
    let imagesConatiner = [];
    if (image1.length > 0) imagesConatiner.push(image1);
    if (image2.length > 0) imagesConatiner.push(image2);
    if (image3.length > 0) imagesConatiner.push(image3);

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

    console.log(data);
    createDonation(data);
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
    } else {
      getAllDonations('');
    }
  }, [getAllDonations, createDonationFormLoading, redirectPage]);

  if (redirect) {
    return <Redirect to='/donations' />;
  }

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

        <form encType='multipart/form-data' onSubmit={(e) => handleSubmit(e)}>
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
              <Styled.FileInput__Input
                type='file'
                name='file'
                title='Donation Images'
                id='FileUpload'
                accept='image/*'
                multiple
                onChange={handleFileInputChange}
              />
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
                {Object.keys(selectedImages).length > 0 ? (
                  Object.keys(selectedImages).length > 1 ? (
                    <span style={{ color: 'green', borderColor: 'green' }}>
                      {Object.keys(selectedImages).length} images selected
                    </span>
                  ) : (
                    <span style={{ color: 'green', borderColor: 'green' }}>
                      {Object.keys(selectedImages).length} image selected
                    </span>
                  )
                ) : (
                  <>Select images</>
                )}
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
            {/* <div>
              <Styled.FieldInput__Input
                name='name'
                value={name}
                onChange={(e) => handleChange(e)}
                type='text'
                placeholder='Name'
                className='form-control is-invalid'
                required
              />
              <div className='invalid-feedback'>Please enter a value</div>
            </div> */}
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                onChange={handleLocation}
                autoComplete='chrome-off'
                required
              >
                {Locations.map((location, index) => {
                  return (
                    <Option key={index} value={location.Location_Name_En}>
                      {location.Location_Name_En + ' - ' + location.District}
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
                Phone Number<span className='required'> *</span>
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
            <div className='form__footer-wrapper'>
              <button
                type='submit'
                value='Submit'
                className='submit__btn'
                disabled={formLoading}
              >
                {formLoading ? (
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
                )}
              </button>
            </div>
          </Styled.FormField__Div>
        </form>
      </Styled.FormWrapper__Div>
    </Styled.FormContainer__Div>
  );
};

DonationsForm.propTypes = {
  getAllDonations: PropTypes.func.isRequired,
  createDonation: PropTypes.func.isRequired,
  donations: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  donations: state.donations,
});

export default connect(mapStateToProps, {
  createDonation,
  getAllDonations,
})(DonationsForm);
