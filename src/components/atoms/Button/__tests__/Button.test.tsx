import S from '../styles.module.scss'
import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { Button } from '..'

describe('[Component:Atoms] Button', () => {
  it('should render with icon', () => {
    renderWithProviders(<Button icon={<div>icon</div>}>Button</Button>)
    const icon = screen.getByText('icon')
    expect(icon).toBeInTheDocument()
  })

  it('should attach button to left', () => {
    renderWithProviders(
      <Button icon={<div>icon</div>} attachPos="left">
        Button
      </Button>
    )

    const button = screen.getByText('Button')
    expect(button).toHaveClass(S.attach_left)
  })

  it('should be uppercase', () => {
    renderWithProviders(<Button uppercase>Button</Button>)

    const button = screen.getByText('Button')
    expect(button).toHaveClass(S.uppercase)
  })
})
