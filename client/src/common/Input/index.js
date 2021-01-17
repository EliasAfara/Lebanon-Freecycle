import React from 'react';

import * as S from './styles';

const Input = ({ id, type, name, placeholder, onChange, maxWidth }) => {
  return (
    <S.Container>
      <label htmlFor={name}>{id}</label>
      <S.Input
        type={type}
        spellcheck='false'
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={onChange}
        maxWidth={maxWidth}
      />
    </S.Container>
  );
};

export default Input;
