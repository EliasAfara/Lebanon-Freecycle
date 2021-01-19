import React, { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import useForm from '../../costumeHooks/useForm';
import { validateRegisterForm } from '../../utils/validateForm';

import loadable, { lazy } from '@loadable/component';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as S from './styles';
import { registerUser } from '../../actions/auth';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const FormContainer = lazy(() => import('../../common/FormContainer'));
const Input = loadable(() => import('../../common/Input'));
const Button = loadable(() => import('../../common/Button'));

const initialValues = {
  fullname: '',
  user_name: '',
  email: '',
  password: '',
};

const Register = ({ registerUser, isAuthenticated, registerFormLoading }) => {
  const { formData, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validateRegisterForm,
    registerUser
  );

  const [formLoading, setFormLoading] = useState(false);

  const { fullname, user_name, email, password, password2 } = formData;

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? <S.Span>{ErrorMessage}</S.Span> : <span />;
  };

  useEffect(() => {
    if (registerFormLoading) {
      setFormLoading(true);
    } else {
      setFormLoading(false);
    }
  }, [registerFormLoading]);

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/donations' />;
  }
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <FormContainer maxWidth={'450px'}>
          <form onSubmit={handleSubmit}>
            <S.FormTitle>Create a New Account</S.FormTitle>
            <>
              <Input
                type='text'
                name='fullname'
                label='Full Name'
                placeholder='Full Name'
                value={fullname}
                onChange={handleChange}
                maxWidth
                isInvalid={errors.fullname}
              />
              <ValidationType type='fullname' />
            </>
            <>
              <Input
                type='text'
                name='user_name'
                label='Username'
                placeholder='Username'
                value={user_name}
                onChange={handleChange}
                maxWidth
                isInvalid={errors.user_name}
              />
              <ValidationType type='user_name' />
            </>
            <>
              <Input
                type='email'
                name='email'
                label='Email'
                placeholder='Email Address'
                value={email}
                onChange={handleChange}
                maxWidth
                isInvalid={errors.email}
              />
              <ValidationType type='email' />
            </>
            <>
              <Input
                type='password'
                name='password'
                label='Password'
                placeholder='Your Password'
                value={password}
                onChange={handleChange}
                maxWidth
                isInvalid={errors.password}
              />
              <ValidationType type='password' />
            </>
            <>
              <Input
                type='password'
                name='password2'
                label='Confirm Password'
                placeholder='Confirm Your Password'
                value={password2}
                onChange={handleChange}
                maxWidth
                isInvalid={errors.password2}
              />
              <ValidationType type='password2' />
            </>
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
                        }}
                      />{' '}
                    </>
                  ) : (
                    <>Register</>
                  )
                }
                disabled={formLoading}
              />
            </S.ButtonContainer>
          </form>

          <S.BottomMessage>
            <>
              Already have an account? <Link to='/login'>Sign In</Link>
            </>
          </S.BottomMessage>
        </FormContainer>
      </Suspense>
    </>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  registerFormLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  registerFormLoading: state.auth.registerFormLoading,
});

export default connect(mapStateToProps, { registerUser })(Register);
