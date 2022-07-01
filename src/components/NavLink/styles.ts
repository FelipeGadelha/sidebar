import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({theme}) => css`
    width: 100%;
    height: ${theme.space[10]};
    display: grid;
    grid: "icon title" 1fr / min-content 1fr;
    overflow: hidden;
    font-size: ${theme.fontSize['2xl']};
    > div {
      grid-area: icon;
      height: 100%;
      width: ${theme.space[16]};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const Icon = styled.div`
  ${({theme}) => css`
    font-size: ${theme.fontSize['2xl']};
  `}
`;

export const Text = styled.span`
  ${({theme}) => css`
    grid-area: title;
    align-self: center;
    overflow: hidden;
    //pointer-events: none;
  `}
`;