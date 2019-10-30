import styled from 'styled-components';

import { Colors } from '../../styles/variables';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 120px;
  background-size: cover;
  border-radius: 4px;
`;

export const Name = styled.strong`
  margin-top: 10px;
  font-size: 18px;
`;

export const FoodType = styled.div`
  font-size: 14px;
  color: ${Colors.textDefault};
`;

export const Address = styled.div`
  font-size: 12px;
  margin-bottom: 15px;
  color: ${Colors.textDefault};
`;
