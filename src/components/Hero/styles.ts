import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const slideIn = keyframes`
  from {
    transform: translateX(-10rem);
  }

  to {
    transform: translateX(0);
  }
`

const slideInReverse = keyframes`
  from {
    transform: translateX(10rem);
  }

  to {
    transform: translateX(0);
  }
`

export const Header = styled.header`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1/-1;
  gap: 2rem;
  padding: 0 2rem;
  overflow: hidden;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    grid-column: 1/4;
    font-size: 3.2rem;
    animation: ${slideIn} 900ms ease;

    span {
      color: ${theme.colors.gray};
    }

    word-wrap: break-word;

    ${media.lessThan('medium')`
      font-size: 2.6rem;
    `}
  `}
`

export const Subtitle = styled.h2`
  align-self: center;
  grid-column: 1/3;
  animation: ${slideInReverse} 900ms ease;

  ${media.lessThan('medium')`
    font-size: 1.8rem;
    order: -1;
    margin-top: 2rem;
    align-self: start;
  `}
`

export const Description = styled.p`
  grid-column: 1/4;

  font-size: 1.9rem;
  animation: ${slideIn} 900ms ease;
`

export const Social = styled.div`
  align-self: center;
  grid-column: 3/-1;
  animation: ${slideInReverse} 900ms ease;

  ${media.lessThan('medium')`
    align-self: start;
    margin: 2.4rem 0;
  `}
`
