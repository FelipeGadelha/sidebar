import styled, { css } from "styled-components";

interface BackdropProps {
  visible: boolean
}

export const Backdrop = styled.div<BackdropProps>`
  ${({theme, visible}) => css`
    position: fixed;
    height: 100vh;
    width: 100vh;
    opacity: 0;
    pointer-events: none;
    background: rgba(0, 0, 0, .4);
    transition: opacity .2s cubic-bezier(0.4, 0, 1, 1);
    ${visible && css`
      opacity: 1;
      pointer-events: all;
    `}
    @media(min-width: ${theme.media.tablet}) {
      opacity: 0;
      pointer-events: none;
    }
  `}
`;