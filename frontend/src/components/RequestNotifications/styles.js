import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  margin-bottom: 15px;
`;

export const Request = styled.li`
  font-size: 16px;
  line-height: 24px;
`;

export const Button = styled.button`
  margin-right: 10px;
  border: 0;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
`;

export const AcceptButton = styled(Button)`
  color: green;
`;

export const RejectButton = styled(Button)`
  color: red;
`;
