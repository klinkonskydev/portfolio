// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardList from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    renderWithTheme(<CardList item={[]} />)
  })
})
