import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  padding-top: 5px;
  margin-top: 10px;

  &:first-of-type {
    padding-top: 0;
    margin-top: 0;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  outline: none;
  width: ${(props) => (props.maxWidth ? '100%' : '90%')};
  height: 40px;
  border: 1px solid #d5dbd9;
  border-radius: 3px;
  font-size: 15px;
  padding: 8px 10px;
  transition: all 0.3s ease;
  border-color: ${(props) => props.isInvalid && '#fa1529'};
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

  @media (max-width: 767px) {
    width: 100%;
  }
`;
