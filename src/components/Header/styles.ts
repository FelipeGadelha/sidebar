import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({theme}) => css`
    grid-area: header;
    /* background: ${theme.colors["gray-300"]}; */
    height: ${theme.space[20]};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;