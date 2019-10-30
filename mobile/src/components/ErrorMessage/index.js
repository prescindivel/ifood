import React from 'react';

import * as S from './styles';

const ErrorMessage = ({ error }) => {
  return (
    <S.Container>
      <S.ErrorMessage>{error}</S.ErrorMessage>
    </S.Container>
  );
};

export default ErrorMessage;
