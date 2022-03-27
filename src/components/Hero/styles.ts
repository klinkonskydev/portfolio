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
    align-items: flex-start;
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    grid-column: 1/4;
    font-size: 3.2rem;

    span {
      color: ${theme.colors.gray};
    }

    word-wrap: break-word;

    ${media.lessThan('medium')`
      font-size: 2.6rem;
      text-align: center;
    `}
  `}
`

export const Subtitle = styled.h2`
  align-self: center;
  grid-column: 1/3;

  ${media.lessThan('medium')`
    font-size: 1.8rem;
    order: -1;
    margin-top: 2rem;
  `}
`

export const Description = styled.p`
  margin-top: 3rem;
  grid-column: 1/4;

  text-align: start;
  font-size: 1.9rem;
  line-height: 3rem;
`

export const Social = styled.div`
  align-self: center;
  grid-column: 3/-1;

  ${media.lessThan('medium')`
    width: fit-content;
  `}
`
