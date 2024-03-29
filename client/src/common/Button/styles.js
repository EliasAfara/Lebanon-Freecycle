import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) =>
    props.type === 'secondary'
      ? props.theme.button.secondary
      : props.theme.button.primary};
  color: ${(props) => (props.color ? '#2E186A' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '1px solid #2E186A' : '0px')};
  border-radius: 4px;
  height: 40px;
  outline: none;
  cursor: pointer;
  margin-top: 1.4rem;
  max-width: ${(props) => props.maxWidth && props.maxWidth};

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '140px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '130px' : '100%')};
  }
`;
