import React from 'react';

import * as S from './styles';

const Input = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  maxWidth,
  isInvalid,
}) => {
  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        type={type}
        spellcheck='false'
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={onChange}
        maxWidth={maxWidth}
        isInvalid={isInvalid}
      />
    </S.Container>
  );
};

export default Input;
