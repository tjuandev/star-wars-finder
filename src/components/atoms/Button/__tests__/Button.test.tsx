import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { Button } from '..'

describe('[Component:Atoms] Button', () => {
  it('should render with icon', () => {
    renderWithProviders(<Button icon={<div>icon</div>}>Button</Button>)
    const icon = screen.getByText('icon')
    expect(icon).toBeInTheDocument()
  })
})
