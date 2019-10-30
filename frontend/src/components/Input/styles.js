import styled from 'styled-components';

import { Colors } from '../../styles/variables';

export const Label = styled.label`
  font-size: 14px;
  color: ${Colors.textDefault};
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input.attrs(props => ({
  htmlFor: props.name
}))`
  padding: 0 15px;
  margin-bottom: 20px;
  height: 45px;
  border: 1px solid ${Colors.inputBorder};
  border-radius: 2px;
  font-size: 16px;
`;
