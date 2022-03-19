import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import media from 'styled-media-query'

export const Wrapper = styled.ul`
  display: grid;
  grid-column: 2/-1;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-row-gap: 1.7rem;
  list-style: none;

  ${media.lessThan('medium')`
    grid-column: 1/-1;
  `}
`

export const List = styled.li`
  ${({ theme }) => css`
    padding: 0.8rem;
    background: ${rgba(theme.colors.gray, 0.2)};
    border-radius: 8px;

    &:focus-within,
    &:hover {
      box-shadow: 0 0 3px 2px ${rgba(theme.colors.ruby, 0.6)};
    }
  `}
`
