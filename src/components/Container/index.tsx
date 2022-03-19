import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  width: 100%;
  max-width: calc(1.6rem * 60);
  margin-left: auto;
  margin-right: auto;
  padding: 5rem 1.6rem;

  ${media.lessThan('medium')`
    padding: 0 1.6rem;
  `}
`
