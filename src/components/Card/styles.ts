import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  text-decoration: none;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.fonts.weight.regular};
    margin-bottom: 0.8rem;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20rem;
    color: ${theme.colors.gray};
    font-weight: ${theme.fonts.weight.light};
  `}
`
