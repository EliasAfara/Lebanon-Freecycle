import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import { Alert } from 'react-bootstrap';
import { validateContactUsForm } from '../../utils/validateForm';

import * as S from './styles';
import { Textarea } from '../../common/InputV2/styles';
import { Input } from '../../common/Input/styles';
import { Button } from '../../common/Button/styles';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, subject, message } = formData;
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({});

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

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      subject,
      message,
    };

    const currentErrors = validateContactUsForm(data);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      emailjs
        .sendForm(
          'gmail',
          'lebfreecycle_mail',
          e.target,
          'user_ldFKvtJ6BNkVIY4yP0J2R'
        )
        .then(
          (result) => {
            console.log(result);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 4000);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  function ShowSuccessAlert() {
    return (
      <Alert
        variant='success'
        onClose={() => setShowAlert(false)}
        style={{ paddingBottom: 0 }}
        dismissible
      >
        <p>Congrats! Your message was sent successfuly.</p>
      </Alert>
    );
  }

  return (
    <>
      {showAlert ? <ShowSuccessAlert /> : null}

      <S.ContactUsForm>
        <form onSubmit={sendEmail}>
          <div>
            <Input
              type='text'
              name='name'
              label='Full Name'
              placeholder='Full Name'
              value={name}
              onChange={(e) => handleChange(e)}
              maxWidth
              isInvalid={errors.name}
            />
            <ValidationType type='name' />
          </div>

          <div style={{ paddingTop: '5px', marginTop: '10px' }}>
            <Input
              type='email'
              name='email'
              label='Email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => handleChange(e)}
              maxWidth
              isInvalid={errors.email}
            />
            <ValidationType type='email' />
          </div>

          <div style={{ paddingTop: '5px', marginTop: '10px' }}>
            <Input
              type='text'
              name='subject'
              label='Subject'
              placeholder='Subject'
              value={subject}
              onChange={(e) => handleChange(e)}
              maxWidth
              isInvalid={errors.subject}
            />
            <ValidationType type='subject' />
          </div>

          <div style={{ paddingTop: '5px', marginTop: '10px' }}>
            <Textarea
              type='text'
              spellcheck='true'
              placeholder='Description'
              name='message'
              id='message'
              onChange={(e) => handleChange(e)}
              value={message}
              isInvalid={errors.message}
            />
            <ValidationType type='message' />
          </div>

          <S.FormField__Div>
            <div className='form__footer-wrapper'>
              <S.ButtonContainer>
                <Button type='submit'>Submit </Button>
              </S.ButtonContainer>
            </div>
          </S.FormField__Div>
        </form>
      </S.ContactUsForm>
    </>
  );
};

export default ContactUs;
