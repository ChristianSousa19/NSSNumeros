import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body, #root {
      background-color: ${theme.bg.custom}!important;
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small};

      height: 100vh;
      width: 100vw;

      overflow-x: hidden;

    }
  `} 
`;

export default GlobalStyles;

