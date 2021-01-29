import React from 'react';
import * as S from './styles';

const Footer = () => {
  return (
    <S.FooterContainer>
      <footer>
        <S.FooterRoutesList>
          <S.FooterRoutesListItem>
            <S.FooterRoutesListItem_Link to='/'>
              Home
            </S.FooterRoutesListItem_Link>
          </S.FooterRoutesListItem>
          <S.FooterRoutesListItem>
            <S.FooterRoutesListItem_Link to='/about'>
              About
            </S.FooterRoutesListItem_Link>
          </S.FooterRoutesListItem>
          <S.FooterRoutesListItem>
            <S.FooterRoutesListItem_Link to='/contact-us'>
              Contact us
            </S.FooterRoutesListItem_Link>
          </S.FooterRoutesListItem>
          <S.FooterRoutesListItem>
            <S.FooterRoutesListItem_Link to='/faq/About'>
              Help & FAQs
            </S.FooterRoutesListItem_Link>
          </S.FooterRoutesListItem>
          <S.FooterRoutesListItem>
            <S.FooterRoutesListItem_Link to='#'>
              Privacy Policy
            </S.FooterRoutesListItem_Link>
          </S.FooterRoutesListItem>
        </S.FooterRoutesList>
        <S.FooterCopyRight>
          <>&copy; {new Date().getFullYear()} Copyright: Elias Afara</>
        </S.FooterCopyRight>
      </footer>
    </S.FooterContainer>
  );
};

export default Footer;
