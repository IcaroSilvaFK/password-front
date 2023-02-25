import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.darkGray};
  padding: 12px;
  border-radius: 2px;
  button {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 2px;

    &:hover {
      background: ${({ theme }) => darken(0.1, theme.colors.green)};
    }
  }
`;
