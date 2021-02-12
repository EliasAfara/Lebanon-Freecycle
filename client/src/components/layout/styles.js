import styled from 'styled-components';
import { NavLink as NavLinkRouter } from 'react-router-dom';

export const PageContainer = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: 991px) {
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 20px;
  }
`;

export const PageContainer_FAQ = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;

  @media only screen and (max-width: 991px) {
    justify-content: normal;
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  margin-right: 28px;
  max-width: 650px;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    margin-right: 15px;
    max-width: 600px;
  }
  @media only screen and (max-width: 991px) {
    margin-right: 0;
    max-width: 100%;
  }
`;

export const SideContentContainer = styled.div`
  width: 300px;
  height: 400px;
  margin-right: 15px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 350px;
    margin-right: 15px;
  }
  @media only screen and (max-width: 1090px) {
    width: 250px;
    height: 200px;
    margin-right: 15px;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    height: 350px;
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

export const SideContentContainer_FAQ = styled.div`
  width: 300px;
  height: 400px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 250px;
  }
  @media only screen and (max-width: 1090px) {
    width: 300px;
    height: 200px;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    height: 250px;
  }
`;

export const SideBarRoute = styled(NavLinkRouter)`
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 12px 24px;

  &:hover {
    color: ${(props) => props.theme.activeLinkColor};
    background: ${(props) => props.theme.models.hoverColor};
  }

  &.active {
    color: ${(props) => props.theme.activeLinkColor};
  }
`;

// Footer
export const Footer = styled.footer`
  bottom: 0;
  width: 100%;
  padding: 25px 0;
  background-color: ${(props) => props.theme.headerBackground};
  border-top: ${(props) => `1px solid ${props.theme.toggleBorder}`};
  color: ${(props) => props.theme.fontColor};
  transition: 0.8s all ease;
`;

export const FooterRoutesList = styled.ul`
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterRoutesListItem = styled.li`
  padding: 0 10px;
`;

export const FooterRoutesListItem_Link = styled(NavLinkRouter)`
  color: inherit;
  text-decoration: none;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

export const FooterCopyRight = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-bottom: 0;
`;

// Footer

// ###############
export const SectionContainer = styled.div`
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 481px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

//  ## How It Works Section  ##

export const HowItWorksSection = styled.div`
  padding-top: 0;
  padding-bottom: 48px;
  position: relative;
  padding-top: 48px;

  @media (min-width: 641px) {
    padding-bottom: 80px;
    padding-top: 80px;
  }

  @media (max-width: 1024px) {
    border-top: ${(props) => `1px solid ${props.theme.toggleBorder}`};
  }
`;

export const HowItWorkTile = styled.div`
  flex-basis: 317px;
  max-width: 317px;
  padding: 16px;
  text-align: center;

  @media (min-width: 641px) {
    padding: 32px;
  }
`;

export const HowItWorksHeading = styled.div`
  padding-bottom: 48px;
  text-align: center;

  @media (min-width: 641px) {
    padding-bottom: 80px;
  }
`;

export const HowItWorksH1 = styled.h1`
  font-style: normal;
  font-size: 2.5rem;
  line-height: 4rem;
  font-weight: 600;
  color: #006a3c;

  @media (min-width: 1440px) {
    font-size: 3.5rem;
  }
  @media (min-width: 620px) and (max-width: 1024px) {
    font-size: 3.5rem;
  } ;
`;

export const FeaturesWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -12px;
  margin-left: -12px;
  margin-top: -12px;

  @media (min-width: 641px) {
    margin-top: -32px;
  }
`;

export const HowItWorkTile_Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  padding: 0;
  text-align: center;
`;

export const InnerItemHeader = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  color: #fff;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.activeLinkColor};
`;

export const HowItWorkTile_Content = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
`;

//  ## How It Works Section  ##
// ###################
// ## Hero Section ##

export const Hero = styled.div`
  height: 41rem;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  min-height: 41rem;
  padding-top: 54px;

  @media (min-width: 481px) and (max-width: 768px),
    (min-width: 769px) and (max-width: 1024px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  @media (min-width: 0px) and (max-width: 480px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
    height: unset;
  }
`;

export const Hero_Content = styled.div`
  -webkit-box-ordinal-group: 2;
  order: 1;
  flex-basis: 50%;
  padding-top: 2.4375rem;
  padding-bottom: 3.5rem;
  padding-right: 2.25rem;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  height: 100%;

  @media (min-width: 481px) and (max-width: 768px),
    (min-width: 769px) and (max-width: 1024px) {
    flex-basis: 100%;
    -webkit-box-ordinal-group: 3;
    order: 2;
    padding-bottom: 2.4375rem;
    padding-right: 1rem;
    padding-left: 1rem;
    height: 60%;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }

  @media (min-width: 0px) and (max-width: 480px) {
    flex-basis: 100%;
    -webkit-box-ordinal-group: 3;
    order: 2;
    padding-bottom: 2.4375rem;
    padding-right: 1rem;
    padding-left: 1rem;
    height: 55vh;
    min-height: 55vh;
    -webkit-box-pack: center;
    justify-content: center;
  }
`;

export const HeroContent_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 481px) and (max-width: 768px),
    (min-width: 0px) and (max-width: 480px),
    (min-width: 769px) and (max-width: 1024px) {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;

export const HeroH1 = styled.h1`
  text-align: center;
  font-style: normal;
  font-size: 3rem;
  font-weight: 700;
  color: #006a3c;
  line-height: 3rem;

  @media (min-width: 1440px) {
    font-size: 4rem;
  }
  @media (min-width: 620px) and (max-width: 1024px) {
    font-size: 4rem;
  } ;
`;

export const HeroText = styled.div`
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const HeroButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const HeroButton_Browse = styled.div`
  width: 110px;
`;
export const HeroButton_TakeAction = styled.div`
  width: 120px;
  margin-left: 16px;
`;

export const HeroButton_Link = styled(NavLinkRouter)`
  color: inherit;

  &:hover {
    color: inherit;
  }
`;

export const HeroImage_container = styled.div`
  -webkit-box-ordinal-group: 3;
  order: 2;
  flex-basis: 50%;
  position: relative;

  @media (min-width: 481px) and (max-width: 768px),
    (min-width: 769px) and (max-width: 1024px) {
    flex-basis: unset;
    -webkit-box-ordinal-group: 2;
    order: 1;
    height: 40%;
  }

  @media (min-width: 0px) and (max-width: 480px) {
    flex-basis: unset;
    -webkit-box-ordinal-group: 2;
    order: 1;
    height: 22.5rem;
    height: 45vh;
    min-height: 45vh;
  }
`;

export const HeroMain_image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 56%, 100% 100%, 0 100%, 8% 56%, 0 36%);

  @media (min-width: 481px) and (max-width: 768px),
    (min-width: 769px) and (max-width: 1024px) {
    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      94% 93%,
      79% 98%,
      46% 100%,
      0 100%
    );
  }
  @media (min-width: 0px) and (max-width: 480px) {
    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      85% 88%,
      88% 97%,
      53% 100%,
      0 100%
    );
  } ;
`;

// ## Hero Section ##
