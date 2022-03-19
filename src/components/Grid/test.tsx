import { render } from '@testing-library/react'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = render(<Grid />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(3,1fr);
      }

      <div
        class="c0"
      />
    `)
  })
})
