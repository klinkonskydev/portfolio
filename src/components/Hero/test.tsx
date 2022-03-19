import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Hero from '.'

describe('<HomeTemplate />', () => {
  it('should rener correctly', () => {
    renderWithTheme(<Hero />)

    expect(
      screen.getByRole('heading', { name: /matheus gabriel klinkonsky/i })
    ).toBeInTheDocument()
  })
})
