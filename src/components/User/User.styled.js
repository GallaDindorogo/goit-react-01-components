import styled from 'styled-components';

export const NameText = styled.p`
  font-size: 24px;
  color: red;
  &:hover {
    background: green;
  }
`;

export const EmailText = styled.p`
  background: ${({ isRed }) => (isRed ? 'red' : 'yellow')};
  font-size: 24px;
  color: blue;
  &:hover {
    background: white;
  }
`;

export const SpanText = styled.span`
  background: black;
  font-size: 20px;
  ${NameText}:hover & {
    color: #000;
  }
`;
