import { darken } from 'polished';
import styled from 'styled-components';

type SizeChanged = {
  width: number;
};

export const Container = styled.form`
  margin: 22px 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const Range = styled.input.attrs(() => ({
  type: 'range',
}))<SizeChanged>`
  -webkit-appearance: none;
  transition: 0.2s;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  max-height: 8px;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.green},
    ${({ theme }) => theme.colors.green}
  );
  background-size: ${({ width }) => width}% 100%;
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.green};
    transition: 0.2s;

    &:focus,
    &:hover {
      background: ${({ theme }) => darken(0.1, theme.colors.black)};
      outline: 2px solid ${({ theme }) => theme.colors.green};
      cursor: pointer;
    }
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

export const HStackBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green};
  }
`;
