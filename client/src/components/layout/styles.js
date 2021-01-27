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

  @media only screen and (max-width: 991px) {
    flex-direction: column;
    padding-top: 20px;
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
