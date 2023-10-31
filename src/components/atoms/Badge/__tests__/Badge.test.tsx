import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { Badge } from '..'
import S from '../styles.module.scss'

describe('[Component:Atoms] Badge', () => {
  it('should render badge with content', () => {
    renderWithProviders(<Badge>Badge</Badge>)
    const content = screen.getByText('Badge')
    expect(content).toBeInTheDocument()
  })

  it('Should be huge text', () => {
    renderWithProviders(<Badge hugeText>Badge</Badge>)
    const content = screen.getByText('Badge')
    expect(content).toHaveClass(S.huge_text)
  })
})
