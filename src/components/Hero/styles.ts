import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1/-1;
  gap: 2rem;
  padding: 0 2rem;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    grid-column: 1/4;
    font-size: 3.2rem;

    span {
      color: ${theme.colors.gray};
    }

    span:first-child {
      color: ${theme.colors.ruby};
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

  ${media.lessThan('medium')`
    font-size: 1.8rem;
    align-self: start;
    order: -1;
    margin-top: 4rem;
  `}
`

export const Social = styled.div`
  align-self: center;
  grid-column: 3/-1;

  ${media.lessThan('medium')`
    width: 100%;
    margin-bottom: 4rem;
  `}
`
