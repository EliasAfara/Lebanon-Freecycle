import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '600px')};
  width: 100%;
  background: ${(props) => props.theme.formBackground};
  margin-top: 10px;
  padding: 10px 50px 30px 50px;
  border: 1px solid #dbdbdb;
  overflow: hidden;
  border-radius: 3px;

  @media (max-width: 980px) {
    padding: 30px 30px 30px 30px;
  }
  @media (max-width: 768px) {
    padding: 30px 50px 30px 50px;
    margin-top: 0;
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
