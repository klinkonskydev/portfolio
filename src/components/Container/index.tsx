import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  width: 100%;
  max-width: calc(1.6rem * 60);
  margin-left: auto;
  margin-right: auto;
  padding: 17rem 0;

  ${media.greaterThan('medium')`
    padding: 5rem 0;
  `}
`
