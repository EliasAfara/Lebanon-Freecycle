import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
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

export const Label__Div = styled.div`
  width: 200px;
  margin-right: 32px;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Label = styled.label`
  width: 100%;
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

export const Input__Div = styled.div`
  height: fit-content;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 90%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  font-size: 15px;
  padding: 8px 10px;
  transition: all 0.3s ease;
  border: 1px solid ${(props) => (props.isInvalid ? '#fa1529' : '#d5dbd9')};
  color: ${(props) => props.isInvalid && '#fa1529'};
  background: ${(props) =>
    props.isInvalid
      ? props.theme.inValidInputBackground
      : props.theme.formBackground};

  &:focus {
    border-color: #609bcf;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,
      0px 0px 8px rgba(70, 131, 223, 0.5);
  }

  &:hover {
    border-color: #2e186a;
  }
`;

export const Textarea = styled.textarea`
  outline: none;
  width: 100%;
  border-radius: 3px;
  font-size: 15px;
  padding: 8px 10px;
  transition: all 0.3s ease;
  /* resize: none; */
  height: 100px;
  border: 1px solid ${(props) => (props.isInvalid ? '#fa1529' : '#d5dbd9')};
  color: ${(props) => props.isInvalid && '#fa1529'};
  background: ${(props) =>
    props.isInvalid
      ? props.theme.inValidInputBackground
      : props.theme.formBackground};

  &:focus {
    border-color: #609bcf;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,
      0px 0px 8px rgba(70, 131, 223, 0.5);
  }

  &:hover {
    border-color: #2e186a;
  }
`;

export const ImagesInput__Div = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin-bottom: 0;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ImagesInput = styled.input`
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

  &:hover {
    border-color: #2e186a;
  }
`;

// export const CostumeInputStyles = createGlobalStyle`


// `;
