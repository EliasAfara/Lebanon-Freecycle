import React, { useEffect, useState, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadable, { lazy } from '@loadable/component';

import { updateRequest, getSingleRequest } from '../../actions/requests';
import { RequestCategories } from '../../shared/Categories';
import { validateRequestsForm } from '../../utils/validateForm';

import Spinner from '../Spinner/Spinner';
import { RiInformationLine } from 'react-icons/ri';
import { Space, Spin } from 'antd';

import * as S from './styles';
import HeadHelmet from '../../utils/HeadHelmet';

const FormContainer = lazy(() => import('../../common/FormContainer'));
const InputV2 = loadable(() => import('../../common/InputV2'));
const Button = loadable(() => import('../../common/Button'));

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
  const [errors, setErrors] = useState({});

  const { name, category, description, phoneNumber } = formData;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let filteredCategory = category.replace(/&/g, 'and');

    const data = {
      name,
      description,
      phoneNumber,
      category: filteredCategory,
    };

    const currentErrors = validateRequestsForm(data);
    setErrors(currentErrors);

    // console.log(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      updateRequest(data, userIDInParam);
    }
  };

  useEffect(() => {
    if (redirectPage === true) {
      setRedirect(true);
    } else {
      if (!singleRequests) {
        getSingleRequest(userIDInParam);
      } else if (userIDInParam !== singleRequests._id) {
        getSingleRequest(userIDInParam);
      }
    }
  }, [getSingleRequest, singleRequests, userIDInParam, redirectPage]);

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
      <HeadHelmet
        title='Edit Request • Lebanon Freecycle'
        description='Lebanon Freecycle Edit Request ❤'
        url={`https://www.lebanon-freecycle.live/edit-request/${userIDInParam}`}
      />

      {editRequestFormLoading ? (
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
                <S.FormTitle>Update Your Request</S.FormTitle>

                <form
                  encType='multipart/form-data'
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <S.FormField__Div>
                    <div className='asideTweek'></div>
                    <span className='sectionSubTitle'>
                      <RiInformationLine /> &nbsp;
                      <span>Request Information</span>
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
                      InputType={'AntSelectCategory'}
                      label='Category'
                      CategoriesData={RequestCategories}
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
