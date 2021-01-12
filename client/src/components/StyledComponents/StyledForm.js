import styled from 'styled-components';

export const FormContainer__Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormGuidelines__Div = styled.div`
  display: block;
  max-width: 300px;
  width: 100%;
  margin: 10px 10px 10px 0;
  padding: 10px 20px 20px 20px;
  background: #fff;
  border: 1px solid #dbdbdb;
  overflow: hidden;
  border-radius: 3px;

  @media (max-width: 980px) {
    width: 280px;
    padding-top: 30px;
    margin-right: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SectionTitle__Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const FormWrapper__Div = styled.div`
  max-width: 600px;
  width: 100%;
  background: #fff;
  margin: 10px 0 10px 10px;
  padding: 10px 80px 30px 50px;
  border: 1px solid #dbdbdb;
  overflow: hidden;
  border-radius: 3px;

  @media (max-width: 980px) {
    padding: 30px 30px 30px 30px;
  }
  @media (max-width: 768px) {
    padding: 30px 50px 30px 50px;
    margin: 0;
  }
  @media (max-width: 600px) {
    border-radius: 0;
    border-right: none;
    border-left: none;
  }
  @media (max-width: 375px) {
    padding: 20px;
  }
  @media (max-width: 300px) {
    padding: 10px;
  }
`;

export const FormField__Div = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  &:first-child {
    margin-top: 0%;
  }

  @media (max-width: 767px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const FieldLabel__Div = styled.div`
  width: 200px;
  margin-right: 32px;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const FieldName__Label = styled.label`
  width: 100%;
  color: #262626;
  font-size: 15px;
  font-weight: 600;
  line-height: 17px;
  text-align: end;
  margin: 0;

  @media (max-width: 767px) {
    margin-bottom: 5px;
    text-align: start;
  }
`;

export const FieldInput__Input = styled.input`
  outline: none;
  width: 90%;
  height: 40px;
  border: 1px solid #d5dbd9;
  border-radius: 3px;
  font-size: 15px;
  padding: 8px 10px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #609bcf;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,
      0px 0px 8px rgba(70, 131, 223, 0.5);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FieldInput__Textarea = styled.textarea`
  outline: none;
  width: 90%;
  border: 1px solid #d5dbd9;
  border-radius: 3px;
  font-size: 15px;
  padding: 8px 10px;
  transition: all 0.3s ease;
  /* resize: none; */
  height: 100px;

  &:focus {
    border-color: #609bcf;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,
      0px 0px 8px rgba(70, 131, 223, 0.5);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FileField__Div = styled.div`
  position: relative;
  display: inline-block;
  width: 92%;
  height: calc(1.5em + 0.75rem + 2px);
  margin-bottom: 0;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FileInput__Input = styled.input`
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin: 0;
  opacity: 0;

  &:focus ~ .custom-file-label {
    border-color: #609bcf;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,
      0px 0px 8px rgba(70, 131, 223, 0.5);
  }
`;

export const RequiredMessage__Div = styled.div`
  width: 140px;
  margin-right: 86px;

  @media (max-width: 767px) {
    margin: 10px 0 10px 0;
    width: 100%;
  }
`;
