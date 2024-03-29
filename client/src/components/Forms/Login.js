import React, { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import useForm from '../../costumeHooks/useForm';
import { validateLoginForm } from '../../utils/validateForm';

import loadable, { lazy } from '@loadable/component';

import { Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as S from './styles';
import { loginUser } from '../../actions/auth';
import HeadHelmet from '../../utils/HeadHelmet';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const FormContainer = lazy(() => import('../../common/FormContainer'));
const Input = loadable(() => import('../../common/Input'));
const Button = loadable(() => import('../../common/Button'));

const initialValues = {
  email: '',
  password: '',
};

const Login = ({ loginUser, isAuthenticated, loginFormLoading }) => {
  const { formData, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validateLoginForm,
    loginUser
  );

  const [formLoading, setFormLoading] = useState(false);

  const { email, password } = formData;

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? <S.Span>{ErrorMessage}</S.Span> : <span />;
  };

  useEffect(() => {
    if (loginFormLoading) {
      setFormLoading(true);
    } else {
      setFormLoading(false);
    }
  }, [loginFormLoading]);

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/donations' />;
  }
  return (
    <>
      <HeadHelmet
        title='Login • Lebanon Freecycle'
        description='Lebanon Freecycle Login ❤'
        url='https://www.lebanon-freecycle.live/login'
      />

      <Suspense
        fallback={
          <div style={{ textAlign: 'center' }}>
            <Space size='middle'>
              <Spin size='large' />
            </Space>
          </div>
        }
      >
        <FormContainer maxWidth={'450px'}>
          <form onSubmit={handleSubmit}>
            <S.FormTitle>Login to your Account</S.FormTitle>
            <>
              <Input
                type='email'
                name='email'
                label='Email'
                placeholder='Your Email Address'
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
            <S.ButtonContainer>
              <Button
                type='submit'
                value={
                  formLoading ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Spin
                        indicator={antIcon}
                        style={{
                          color: 'inherit',
                          fontSize: 'inherit',
                        }}
                      />{' '}
                    </div>
                  ) : (
                    <>Login</>
                  )
                }
                disabled={formLoading}
              />
            </S.ButtonContainer>
          </form>
          <S.BottomMessage>
            <>
              Don't have an account? <Link to='register'>Sign up here</Link>
            </>
          </S.BottomMessage>
        </FormContainer>
      </Suspense>
    </>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loginFormLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loginFormLoading: state.auth.loginFormLoading,
});

export default connect(mapStateToProps, { loginUser })(Login);
