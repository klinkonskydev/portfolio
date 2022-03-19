import { createGlobalStyle, css } from 'styled-components'
import { rgba } from 'polished'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: light;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('./fonts/OpenSans-Light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: regular;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('./fonts/OpenSans-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: medium;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('./fonts/OpenSans-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: bold;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('./fonts/OpenSans-Bold.woff2') format('woff2');
  }

  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      --webkit-font-smoothing: antialiased;
      --moz-osx-font-smoothing: grayscale;
      image-rendering: -webkit-optimize-contrast;
    }

    body {
      color: ${theme.colors.white};
      background: ${theme.colors.xblue};

      font-size: 1.6rem;
      font-family: ${theme.fonts.family};
    }

    ::selection,
    ::-moz-selection {
      background: ${rgba(theme.colors.ruby, 0.6)};
    }
  `}
`
