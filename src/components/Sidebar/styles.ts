import styled, { css } from "styled-components";

interface ContainerProps {
  isActive: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({theme, isActive}) => css`
    grid-area: sidebar;
    width: ${isActive ? theme.layout["sidebar-width"] : theme.space[16]};
    /* background: ${theme.colors.bg}; */
    transition: all .2s ease;
  `}
`;

export const Logo = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: ${theme.space[40]};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;