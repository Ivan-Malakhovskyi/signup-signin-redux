import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Topic = styled.p`
  color: ${({ theme: { colors } }) => colors.white};
  margin-right: 10px;
`;
