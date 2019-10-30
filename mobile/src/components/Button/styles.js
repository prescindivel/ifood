import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
  margin-bottom: 10px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  ${props => props.primary && `background-color: #f05a5b;`}
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  ${props => (props.primary ? `color: #fff;` : `color: #f05a5b;`)}
`;
