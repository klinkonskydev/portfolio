import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SocialLinks from '.'

describe('<SocialLinks />', () => {
  it('should render github and linkedin when to be passed', () => {
    renderWithTheme(<SocialLinks />)
  })
})
