import React from 'react';
import * as S from './styles';

const Button = ({ type, value, disabled }) => {
  return (
    <>
      <S.Button type={type} disabled={disabled}>
        {value}
      </S.Button>
    </>
  );
};

export default Button;
