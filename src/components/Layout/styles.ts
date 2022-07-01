import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  grid:
    "sidebar header" min-content
    "sidebar main" 1fr / min-content 1fr;
`;
