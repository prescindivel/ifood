import styled from 'styled-components';
import { Image } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
`;

export const Logo = styled(Image)`
  margin-top: 10px;
  height: 32px;
  align-self: center;
  resize-mode: contain;
`;
