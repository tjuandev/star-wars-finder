import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { Button } from '..'
import S from '../styles.module.scss'

describe('[Component:Atoms] Button', () => {
  it('should render with icon', () => {
    renderWithProviders(<Button icon={<div>icon</div>}>Button</Button>)
    const icon = screen.getByText('icon')
    expect(icon).toBeInTheDocument()
  })

  it('Should be uppercase', () => {
    renderWithProviders(<Button uppercase>Button</Button>)
    const content = screen.getByText('Button')
    expect(content).toHaveClass(S.uppercase)
  })

  it('Should attach to left', () => {
    renderWithProviders(<Button attachPos="left">Button</Button>)
    const content = screen.getByText('Button')
    expect(content).toHaveClass(S.attach_left)
  })
})
