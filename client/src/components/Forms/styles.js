import styled from 'styled-components';

export const FormContainer__Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  font-size: 12px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const BottomMessage = styled.div`
  width: 100%;
  margin-top: 10px;
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

export const RequiredMessage__Div = styled.div`
  width: 140px;
  margin-right: 86px;

  @media (max-width: 767px) {
    margin: 10px 0 10px 0;
    width: 100%;
  }
`;

export const ContactUsForm = styled.div`
  width: 400px;

  @media (max-width: 768px) {
    width: 500px;
  }
`;
