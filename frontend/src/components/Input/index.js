import React from 'react';

import * as S from './styles';

const Input = ({
  label,
  name,
  type,
  placeholder,
  value,
  required,
  disabled,
  onChange,
}) => {
  return (
    <>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
