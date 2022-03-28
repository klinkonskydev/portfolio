import styled, { css, keyframes } from 'styled-components'

const colors = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
`

export const Cursor = styled.div`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    position: fixed;
    transform: translate(-50%, -50%);

    z-index: 999;
    border-radius: 50%;
    pointer-events: none;

    animation: ${colors} 5s infinite;
    background: ${theme.colors.ruby};

    display: none;
    box-shadow: 0 0 20px ${theme.colors.ruby}, 0 0 60px ${theme.colors.ruby},
      0 0 100px ${theme.colors.ruby};
  `}
`
