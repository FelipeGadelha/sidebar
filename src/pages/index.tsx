import styled, { css } from "styled-components";
import { Layout } from "../components/Layout";

const Container = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export function Home() {
  return (
    <Layout>
      <Container>
        home
      </Container>
    </Layout>
  )
}

export default Home;