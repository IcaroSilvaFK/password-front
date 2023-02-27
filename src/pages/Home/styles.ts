import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: none;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 2px;

  min-width: 450px;
  max-height: 262px;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 22px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.green};
    border-radius: 2px;
  }

  > button {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 2px;

    &:hover {
      background: ${({ theme }) => darken(0.1, theme.colors.green)};
    }
  }

  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  input[type='text'] {
    background: ${({ theme }) => theme.colors.black};
    padding: 12px;
    border-radius: 2px;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
