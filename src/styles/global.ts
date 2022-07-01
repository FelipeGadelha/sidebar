import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { font-size: 75%; }

  html, body {
    background: ${({theme}) => theme.colors.bg};
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: ${({theme}) => theme.media['mobile-s']}) {
    html { font-size: 75%; }
  }

  @media (min-width: ${({theme}) => theme.media['mobile-m']}) {
    html { font-size: 87.5%; }
  }

  @media (min-width: ${({theme}) => theme.media.laptop}) {
    html { font-size: 100%; }
    /* html { font-size: 93.75%; } */
  }

  @media (min-width: ${({theme}) => theme.media.desktop}) {
    html { font-size: 125%; }
  }

  body, input, textarea, select, button {
    ${({theme}) => css`
      font: 400 1rem "Roboto", sans-serif;
      color: ${theme.colors.text};
    `}
  }

  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

`
export default GlobalStyle