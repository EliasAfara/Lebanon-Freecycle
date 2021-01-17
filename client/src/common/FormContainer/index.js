import React from 'react';

import * as S from './styles';

const FormContainer = ({ children, maxWidth }) => (
  <S.FormContainer maxWidth={maxWidth}>{children}</S.FormContainer>
);

export default FormContainer;
