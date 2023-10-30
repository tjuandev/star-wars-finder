import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { Badge } from '..'

describe('[Component:Atoms] Badge', () => {
  it('should render badge with content', () => {
    renderWithProviders(<Badge>Badge</Badge>)
    const content = screen.getByText('Badge')
    expect(content).toBeInTheDocument()
  })
})
