import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { Logo } from '..'
import S from '../styles.module.scss'

describe('[Component:Atoms] Logo', () => {
  it('should render a large size logo', () => {
    renderWithProviders(<Logo size="lg" />)

    const logoSvg = screen.getByRole('img', { name: /logo/i })

    expect(logoSvg).toHaveClass(S.lg)
  })

  it('should render a medium size logo', () => {
    renderWithProviders(<Logo size="md" />)

    const logoSvg = screen.getByRole('img', { name: /logo/i })

    expect(logoSvg).toHaveClass(S.md)
  })
})
