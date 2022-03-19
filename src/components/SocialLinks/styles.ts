import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  gap: 1.7rem;

  ${media.lessThan('medium')`
    align-items: flex-start;
    justify-content: flex-start;
  `}

  ${media.lessThan('small')`
    flex-wrap: wrap;
    justify-content: flex-start;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${theme.colors.gray};
    text-decoration: none;

    transition: all ${theme.transitions.fast};

    &:hover,
    &:focus {
      color: ${theme.colors.ruby};
    }
  `}
`
