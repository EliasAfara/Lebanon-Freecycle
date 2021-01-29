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
  height: 100vh;
  margin-top: 75px;

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
  width: 400px;
  height: 400px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 350px;
  }
  @media only screen and (max-width: 1090px) {
    width: 300px;
    height: 300px;
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
    height: 350px;
    margin-bottom: 20px;
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

  &:hover div {
    color: ${(props) => props.theme.activeLinkColor};
    background: ${(props) => props.theme.models.hoverColor};
  }

  &.active div {
    color: ${(props) => props.theme.activeLinkColor};
  }
`;

// Footer
export const FooterContainer = styled.div`
  padding: 40px 0;
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
