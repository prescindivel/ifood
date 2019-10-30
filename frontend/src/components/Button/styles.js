import styled from 'styled-components';

import { Colors } from '../../styles/variables';

export const Button = styled.button`
  padding: 0 20px;
  width: 100%;
  height: 42px;
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.primary};
  border-radius: 2px;
  border: 1px solid ${Colors.inputBorder};
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
