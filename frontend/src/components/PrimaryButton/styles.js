import styled from 'styled-components';

import Button from './../Button';

import { Colors } from '../../styles/variables';

export const PrimaryButton = styled(Button)`
  color: #fff;
  border-color: ${Colors.primary};
  background-color: ${Colors.primary};
`;
