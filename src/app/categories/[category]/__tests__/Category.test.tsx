import renderWithProviders from 'testHelpers/providers/components'
import Category from '../page'
import { redirect } from 'next/navigation'
import { Categories } from 'constant'
import { screen } from '@testing-library/react'
import event from 'testHelpers/providers/helpFunctions'

vi.mock('next/navigation', () => ({
  redirect: vi.fn()
}))

describe('Page Category', () => {
  const user = event()

  it('Should redirect to not-found page', () => {
    renderWithProviders(
      <Category
        params={{
          category: undefined
        }}
      />
    )

    expect(redirect).toHaveBeenCalledWith('/not-found')
  })

  it('Should fetch for category based topics', async () => {
    renderWithProviders(
      <Category
        params={{
          category: Categories.People
        }}
      />
    )

    const input = screen.getByPlaceholderText('Search here...')
    const searchButton = screen.getByRole('button', { name: 'Search' })

    await user.type(input, 'Anakim')
    await user.click(searchButton)

    const firstRequestResult = await screen.findByText('Anakim')

    expect(firstRequestResult).toBeInTheDocument()
  })

  it('Should fetch popular topics based on user stored data', async () => {
    renderWithProviders(
      <Category
        params={{
          category: Categories.People
        }}
      />
    )

    const firstRequestResult = await screen.findByText('Anakim')
    expect(firstRequestResult).toBeInTheDocument()
  })
})
