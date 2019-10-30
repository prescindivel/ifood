import styled from 'styled-components';
import { Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Details = styled.View`
  margin-left: 10px;
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

export const FoodType = styled.Text`
  font-size: 14px;
  color: #444;
`;

export const Address = styled.Text`
  font-size: 12px;
  margin-bottom: 15px;
  color: #444;
`;
