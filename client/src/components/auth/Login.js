import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ loginUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Destructing
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // This way we can handleChange on every field
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login function');
    loginUser(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/donations' />;
  }
  return (
    <div className='page-content'>
      <div className='form-v5-content card'>
        <form className='form-detail' onSubmit={handleSubmit}>
          <h2>Sign into your Accounth</h2>
          <div className='form-row'>
            <label htmlFor='your-email'>Your Email</label>
            <input
              type='email'
              id='your-email'
              className='input-text'
              placeholder='Your Email Address'
              name='email'
              value={email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className='form-row'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              className='input-text'
              placeholder='Your
          Password'
              name='password'
              value={password}
              onChange={(e) => handleChange(e)}
              minLength='6'
              required
            />
          </div>
          <div className='form-row-last'>
            <input type='submit' className='auth-btn' value='Login' />
          </div>
        </form>

        <p className='sign-up-link'>
          {' '}
          Don't have an account <Link to='register'>Sign Up </Link>
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(Login);
