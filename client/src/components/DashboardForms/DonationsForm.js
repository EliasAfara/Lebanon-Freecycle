import React from 'react';
//import PropTypes from 'prop-types';
import './DashboardForms.css';

const DonationsForm = (props) => {
  return (
    <div className='DonationsForm__Container'>
      <div className='Form__guide'>Please Provide Valid Information</div>
      <div className='Donations__wrapper'>
        <form encType='multipart/form-data' className='Donations__form'>
          <div className='form__input-field'>
            <div className='form__label-div'>
              <label className='form__label'>Item Image(s)</label>
            </div>
            <div className='file__input-div'>
              <input type='file' className='file__input' id='customFile' />
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
                Choose file
              </label>
            </div>
          </div>
          <div className='form__input-field'>
            <div className='form__label-div'>
              <label className='form__label'>Item Name</label>
            </div>

            <input
              name='name'
              type='text'
              placeholder='Name'
              className='input__field'
              required
            />
          </div>

          <div className='form__input-field'>
            <div className='form__label-div'>
              <label className='form__label'>Item Location</label>
            </div>
            <div className='form__custom-select'>
              <select name='state' required>
                <option value=''>Select</option>
                <option value='Tyre'>Tyre</option>
                <option value='Beirut'>Beirut</option>
              </select>
            </div>
          </div>

          <div className='form__input-field'>
            <div className='form__label-div'>
              <label className='form__label'>Item Category</label>
            </div>
            <div className='form__custom-select'>
              <select name='category' required>
                <option value=''>Select</option>
                <option value='Forniture'>Forniture</option>
                <option value='Clothes'>Clothes</option>
                <option value='Food'>Food</option>
                <option value='Books'>Books</option>
              </select>
            </div>
          </div>

          <div className='form__input-field'>
            <div className='form__label-div'>
              <label className='form__label'>Item Condition</label>
            </div>
            <div className='form__custom-select'>
              <select name='condition' required>
                <option value=''>Select</option>
                <option value='Used'>Used</option>
                <option value='Brand New'>Brand New</option>
              </select>
            </div>
          </div>

          <div className='form__input-field'>
            <div className='form__label-div'>
              <label className='form__label'>Owner's Phone Number</label>
            </div>
            <input
              name='phoneNumber'
              type='tel'
              placeholder='Phone Number'
              className='input__field'
              required
            />
          </div>

          <div className='form__input-field'>
            <div className='form__label-div'>
              <label className='form__label'>Owner's Address</label>
            </div>
            <input
              name='address'
              type='text'
              placeholder='Address'
              className='input__field'
              required
            />
          </div>

          <div className='form__input-field'>
            <div className='form__label-div'>
              <label className='form__label'>Detailed Description</label>
            </div>
            <textarea
              name='description'
              placeholder='Description'
              className='input__field input__field-textarea'
            ></textarea>
          </div>

          <div className='form__input-field'>
            <div style={{ width: '140px', marginRight: '32px' }}></div>
            <input type='submit' value='Submit' className='submit__btn' />
          </div>
        </form>
      </div>
    </div>
  );
};

//DonationForm.propTypes = {};

export default DonationsForm;

// style = 'object-fit: cover;';

// sizes = '600px';
// srcset="";
// tabindex="";

// <form encType='multipart/form-data' method='POST' role='presentation'>
//   <input accept='image/jpeg' className='tb_sK' type='file' />
// </form>;
