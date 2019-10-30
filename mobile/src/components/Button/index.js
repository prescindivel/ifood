import React from 'react';

import * as S from './styles';

const Button = ({ children, primary, ...rest }) => {
  return (
    <S.Button primary={primary} {...rest}>
      <S.ButtonText primary={primary}>{children}</S.ButtonText>
    </S.Button>
  );
};

export default Button;
