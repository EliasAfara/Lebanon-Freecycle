import styled from 'styled-components';

export const ContactUsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;
export const ContactUsContent = styled.div`
  width: 500px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const PublicPageContentHeader = styled.h1`
  font-size: 40px;
  line-height: 1;
  color: ${(props) => props.theme.fontColor};
`;
export const themeActiveColor = styled.span`
  color: ${(props) => props.theme.activeLinkColor};
`;

export const TextH3 = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 8px;
  font-weight: 500;
  letter-spacing: normal;
  margin-bottom: 8px;
  color: ${(props) => props.theme.fontColor};
  margin-top: 32px;
`;
