import React from 'react';

import * as S from './styles';

const LogoutButton = () => {
  const handleClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_name');

    window.location = '/';
  };

  return <S.LogoutButton onClick={handleClick}>Sair</S.LogoutButton>;
};

export default LogoutButton;
