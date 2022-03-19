import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HomeTemplate from '.'

jest.mock('components/Hero', () => ({
  __esModule: true,
  default: () => <div data-testid="mock hero" />
}))

describe('<Grid />', () => {
  it('should render correctly', () => {
    renderWithTheme(<HomeTemplate />)

    expect(screen.getByTestId(/mock hero/i)).toBeInTheDocument()
  })
})
