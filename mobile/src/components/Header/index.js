import React from 'react';

import LogoutButton from '../LogoutButton';

import logo from '../../assets/logo.png';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Logo source={logo} />
      <LogoutButton />
    </S.Container>
  );
};

export default Header;
