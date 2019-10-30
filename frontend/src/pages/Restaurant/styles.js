import styled from 'styled-components';

export const Thumbnail = styled.label`
  margin-bottom: 20px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  cursor: pointer;
  &.has-thumbnail {
    border: 0;
    & img {
      display: none;
    }
  }
`;
