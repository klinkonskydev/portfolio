import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

describe('<Card />', () => {
  it('should render the card with title and description', () => {
    renderWithTheme(<Card title="title" description="matheus klinkonsky" />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()

    expect(screen.getByText(/matheus klinkonsky/i)).toBeInTheDocument()
  })
})
