import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as S from './styles';

const Footer = ({ isAuthenticated }) => {
  return (
    <S.Footer>
      <S.FooterRoutesList>
        {!isAuthenticated && (
          <S.FooterRoutesListItem>
            <S.FooterRoutesListItem_Link to='/'>
              Home
            </S.FooterRoutesListItem_Link>
          </S.FooterRoutesListItem>
        )}

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
    </S.Footer>
  );
};

Footer.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Footer);
