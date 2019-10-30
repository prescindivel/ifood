import React from 'react';

import * as S from './styles';

const ErrorMessage = ({ error }) => {
  return <S.ErrorMessage>{error}</S.ErrorMessage>;
};

export default ErrorMessage;
