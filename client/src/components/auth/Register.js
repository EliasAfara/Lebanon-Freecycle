import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { registerUser } from '../../actions/auth';
import PropTypes from 'prop-types';
import './auth.css';
import { setAlert } from '../../actions/alert';

const Register = ({ registerUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  // Destructing
  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // This way we can handleChange on every field
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      registerUser({
        name,
        email,
        password,
      });
    }
  };
  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/donations' />;
  }
  return (
    <div className='page-content'>
      <div className='form-v5-content card'>
        <form className='form-detail' onSubmit={(e) => handleSubmit(e)}>
          <h2>Create Your Account</h2>
          <small className='ps-small'>
            P.S. This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
          <div className='form-row'>
            <label htmlFor='full-name'>Full Name</label>
            <input
              type='text'
              id='full-name'
              className='input-text'
              placeholder='Your Full Name'
              name='name'
              value={name}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
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
              placeholder='Your Password'
              name='password'
              value={password}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className='form-row'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input
              type='password'
              id='confirm-password'
              className='input-text'
              placeholder='Confirm Your Password'
              name='password2'
              value={password2}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className='form-row-last'>
            <input type='submit' className='auth-btn' value='Register' />
          </div>
        </form>
        <p className='sign-in-link'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { registerUser })(Register);
