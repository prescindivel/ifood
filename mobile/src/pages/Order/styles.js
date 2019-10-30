import styled from 'styled-components';
import { Image } from 'react-native';

export const Container = styled.View`
  margin-top: 30px;
  padding: 0 20px;
`;

export const Food = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Details = styled.View`
  margin-right: 10px;
  flex: auto;
`;

export const Photo = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  resize-mode: contain;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 18px;
`;

export const Price = styled.Text`
  font-size: 14px;
  color: green;
`;

export const Description = styled.Text`
  font-size: 12px;
  margin-bottom: 5px;
  color: #444;
`;
