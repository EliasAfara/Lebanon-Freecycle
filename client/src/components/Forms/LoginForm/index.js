import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import useForm from './useForm';
import { validateLoginForm } from '../../../utils/validateForm';

import loadable from '@loadable/component';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as S from './styles';
import { loginUser } from '../../../actions/auth';
import FormContainer from '../../../common/FormContainer';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Input = loadable(() => import('../../../common/Input'));
const Button = loadable(() => import('../../../common/Button'));

const Login = ({ loginUser, isAuthenticated, loginFormLoading }) => {
  const { formData, errors, handleChange, handleSubmit } = useForm(
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
      <FormContainer maxWidth={'450px'}>
        <form onSubmit={handleSubmit}>
          <S.FormTitle>Login to your Account</S.FormTitle>
          <>
            <Input
              type='email'
              name='email'
              id='Your Email'
              placeholder='Your Email Address'
              value={email}
              onChange={handleChange}
              maxWidth
            />
            <ValidationType type='email' />
          </>
          <>
            <Input
              type='password'
              name='password'
              id='Password'
              placeholder='Your Password'
              value={password}
              onChange={handleChange}
              maxWidth
            />
            <ValidationType type='password' />
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
                  <>Submit</>
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
