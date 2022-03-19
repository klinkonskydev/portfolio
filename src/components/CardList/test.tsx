// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import cardItemsMock from 'components/Card/mock'

import CardList from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    renderWithTheme(<CardList items={cardItemsMock} />)
  })
})
