import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  gap: 1.7rem;

  ${media.lessThan('medium')`
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${theme.colors.gray};
    text-decoration: none;

    &,
    svg {
      transition: color ${theme.transitions.fast};
    }

    &:hover,
    svg:hover,
    &:focus,
    svg:focus {
      color: ${theme.colors.ruby};
    }
  `}
`
