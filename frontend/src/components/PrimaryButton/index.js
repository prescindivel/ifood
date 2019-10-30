import React from 'react';

import * as S from './styles';

const PrimaryButton = ({ children, onClick, type, disabled }) => {
  return (
    <S.PrimaryButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </S.PrimaryButton>
  );
};

export default PrimaryButton;
