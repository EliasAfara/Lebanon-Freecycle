import React from 'react';
import PhoneInput from 'react-phone-input-2';

import * as S from './styles';
import { Select } from 'antd';
const { Option } = Select;

const InputV2 = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  isInvalid,
  isRequired,
  errorMessage,
  CategoriesData,
  locationData,
  InputType,
  imagesLabel,
}) => {
  return (
    <S.Container>
      <S.Label__Div>
        <S.Label htmlFor={name}>
          <>{label}</>
          <>{isRequired && <span className='required'> *</span>}</>
        </S.Label>
      </S.Label__Div>

      <S.Input__Div>
        {InputType === 'Normal' && (
          <S.Input
            type={type}
            spellcheck='false'
            placeholder={placeholder}
            name={name}
            id={name}
            onChange={onChange}
            value={value}
            isInvalid={isInvalid}
          />
        )}

        {InputType === 'Textarea' && (
          <S.Textarea
            type={type}
            spellcheck='false'
            placeholder={placeholder}
            name={name}
            id={name}
            onChange={onChange}
            value={value}
            isInvalid={isInvalid}
          />
        )}

        {InputType === 'PhoneInput' && (
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
            value={value}
            onChange={onChange}
            inputClass={`${isInvalid && 'phoneNumber-Select-Inactive'}`}
            inputStyle={{
              border: `${isInvalid && '1px solid #fa1529'}`,
            }}
            buttonStyle={{
              borderColor: `${isInvalid && '#fa1529'}`,
            }}
          />
        )}

        {InputType === 'AntSelectCategory' && (
          <Select
            showSearch
            size={'large'}
            style={{
              width: '100%',
              height: '100%',
            }}
            placeholder='Select Category'
            dropdownMatchSelectWidth={false}
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={onChange}
            value={value}
            dropdownStyle={{
              backgroundColor: `${isInvalid && '#fffafa'}`,
            }}
            className={`${isInvalid && 'Ant-Select-isInvalid'}`}
          >
            {CategoriesData.map((category) => {
              return (
                <Option key={category.id} value={category.title}>
                  {category.title}
                </Option>
              );
            })}
          </Select>
        )}

        {InputType === 'AntSelectLocation' && (
          <Select
            showSearch
            size={'large'}
            style={{ width: '100%', height: '100%' }}
            placeholder='Select Location'
            defaultActiveFirstOption={false}
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            value={value}
            onChange={onChange}
            autoComplete='chrome-off'
            dropdownStyle={{
              backgroundColor: `${isInvalid && '#fffafa'}`,
            }}
            className={`${isInvalid && 'Ant-Select-isInvalid'}`}
          >
            {locationData.map((location, index) => {
              return (
                <Option key={index} value={location.Location_Name_En}>
                  {location.Location_Name_En + ' - ' + location.District}
                </Option>
              );
            })}
          </Select>
        )}

        {InputType === 'ImagesInput' && (
          <S.ImagesInput__Div>
            <S.ImagesInput
              type='file'
              name='file'
              title='Request Images'
              id='RequestImagesUpload'
              accept='image/*'
              multiple
              onChange={onChange}
            />
            <label
              className={`${
                isInvalid
                  ? 'invalid-selected-images custom-file-label'
                  : 'custom-file-label'
              }`}
              htmlFor='RequestImagesUpload'
              style={{
                width: '100%',
                borderRadius: '3px',
                fontSize: '14px',
                fontWeight: '400',
                border: `${isInvalid && '1px solid #fa1529'}`,
              }}
            >
              {imagesLabel}
            </label>
          </S.ImagesInput__Div>
        )}
        {isInvalid && errorMessage ? errorMessage : null}
      </S.Input__Div>
    </S.Container>
  );
};

export default InputV2;
