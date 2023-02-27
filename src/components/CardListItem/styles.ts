import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.li`
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;

  button {
    color: ${({ theme }) => theme.colors.green};
    background: transparent;

    &:hover {
      color: ${({ theme }) => darken(0.1, theme.colors.green)};
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
  > svg {
    color: ${({ theme }) => darken(0.1, theme.colors.green)};
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;

    span {
      width: 250px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
