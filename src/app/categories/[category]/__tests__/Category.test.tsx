import renderWithProviders from 'testHelpers/providers/components'
import Category from '../page'
import { notFound } from 'next/navigation'
import { screen } from '@testing-library/react'
import event from 'testHelpers/providers/helpFunctions'
import { useSearchCategory } from 'services/category'
import type { Mock } from 'vitest'

const mockedUseSearchCategory = useSearchCategory as Mock<any, any>

vi.mock('next/navigation', () => ({
  notFound: vi.fn()
}))

vi.mock('services/category', () => ({
  useSearchCategory: vi.fn().mockReturnValue({
    data: [
      {
        id: 1,
        name: 'Anakim',
        details: {
          detail: 'test'
        }
      }
    ],
    isLoading: false
  })
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

    expect(notFound).toHaveBeenCalled()
  })

  it('Should show loading state', () => {
    mockedUseSearchCategory.mockReturnValueOnce({
      data: undefined,
      isLoading: true
    })

    renderWithProviders(
      <Category
        params={{
          category: 'people'
        }}
      />
    )

    const loader = screen.getByLabelText('loader')
    expect(loader).toBeInTheDocument()
  })

  it('Should fetch for category based topics', async () => {
    renderWithProviders(
      <Category
        params={{
          category: 'people'
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

  it('Should show detailed badges', async () => {
    renderWithProviders(
      <Category
        params={{
          category: 'people'
        }}
      />
    )

    const input = screen.getByPlaceholderText('Search here...')
    const searchButton = screen.getByRole('button', { name: 'Search' })

    await user.type(input, 'Anakim')
    await user.click(searchButton)

    const accordionHeader = await screen.findByText('Anakim')

    await user.click(accordionHeader)

    const detailsFirstItemKey = await screen.findByText(/detail/i)
    expect(detailsFirstItemKey).toBeInTheDocument()
  })
})
