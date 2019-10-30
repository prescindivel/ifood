import styled from 'styled-components';

import { Space } from './../../styles/variables';

export const RestaurantList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: ${Space.default};
`;
