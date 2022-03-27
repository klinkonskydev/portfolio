import { createGlobalStyle, css } from 'styled-components'
import { rgba } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      ::selection,
      ::-moz-selection {
        background: ${rgba(theme.colors.ruby, 0.6)};
      }
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
  `}
`
