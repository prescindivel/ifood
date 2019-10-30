import React from 'react';

import * as S from './styles';

const Button = ({ children, className, disabled, onClick }) => (
  <S.Button className={className} disabled={disabled} onClick={onClick}>
    {children}
  </S.Button>
);

export default Button;
