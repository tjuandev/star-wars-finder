import renderWithProviders from 'testHelpers/providers/components'
import Category from '../page'
import { notFound } from 'next/navigation'
import { screen } from '@testing-library/react'
import event from 'testHelpers/providers/helpFunctions'
import {
  useSearchCategory,
  useSearchParallelCategories
} from 'services/category'
import type { Mock } from 'vitest'
import { usePopularSearches } from 'store/popularSearchesSlice'
import { errors } from 'services/category/errors'

const mockedUseSearchCategory = useSearchCategory as Mock<any, any>
const mockedUseSearchParallelCategories = useSearchParallelCategories as Mock<
  any,
  any
>
const mockedUsePopularSearches = usePopularSearches as Mock<any, any>

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
  }),
  useSearchParallelCategories: vi.fn().mockReturnValue({
    data: [
      {
        id: 2,
        // eslint-disable-next-line sonarjs/no-duplicate-string
        name: 'Popular character',
        details: {
          detail: 'test'
        }
      }
    ],
    isLoading: false
  })
}))

vi.mock('store/popularSearchesSlice', () => ({
  usePopularSearches: vi.fn().mockReturnValue({
    addToRanking: vi.fn(),
    data: {
      people: [
        {
          id: 2
        }
      ]
    }
  })
}))

const inputSearchPlaceholder = 'Search here...'

describe('Page Category Search Action', () => {
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

  it('Should show loading state', async () => {
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

    const input = screen.getByPlaceholderText(inputSearchPlaceholder)
    const searchButton = screen.getByRole('button', { name: 'Search' })

    await user.type(input, 'Anakim')
    await user.click(searchButton)

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

    const input = screen.getByPlaceholderText(inputSearchPlaceholder)
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

    const input = screen.getByPlaceholderText(inputSearchPlaceholder)
    const searchButton = screen.getByRole('button', { name: 'Search' })

    await user.type(input, 'Anakim')
    await user.click(searchButton)

    const accordionHeader = await screen.findByText('Anakim')

    await user.click(accordionHeader)

    const detailsFirstItemKey = await screen.findByText(/detail/i)
    expect(detailsFirstItemKey).toBeInTheDocument()
  })

  it('Should show empty data message', async () => {
    mockedUseSearchCategory.mockReturnValueOnce({
      data: [],
      isLoading: false,
      error: false
    })

    renderWithProviders(
      <Category
        params={{
          category: 'people'
        }}
      />
    )

    const input = screen.getByPlaceholderText(inputSearchPlaceholder)
    const searchButton = screen.getByRole('button', { name: 'Search' })

    await user.type(input, 'Not found data')
    await user.click(searchButton)

    const { message, title } = errors['not-found']

    const errorTitle = await screen.findByText(title)
    const errorMessage = await screen.findByText(message)
    expect(errorTitle).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
  })
})

describe('Page Category Popular Action', () => {
  const user = event()

  it('Should render top five popular ids', async () => {
    renderWithProviders(
      <Category
        params={{
          category: 'people'
        }}
      />
    )
    const popularRequestResult = await screen.findByText('Popular character')
    expect(popularRequestResult).toBeInTheDocument()
  })

  it('Should call addToRanking when accordion is opened', async () => {
    const { addToRanking } = mockedUsePopularSearches()

    renderWithProviders(
      <Category
        params={{
          category: 'people'
        }}
      />
    )

    const accordionHeader = await screen.findByText('Popular character')
    await user.click(accordionHeader)
    expect(addToRanking).toHaveBeenCalled()
  })

  it('Should loader', () => {
    mockedUseSearchParallelCategories.mockReturnValueOnce({
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

  it('Should show error message', async () => {
    mockedUseSearchParallelCategories.mockReturnValueOnce({
      data: undefined,
      isLoading: false,
      error: true
    })

    renderWithProviders(
      <Category
        params={{
          category: 'people'
        }}
      />
    )

    const { title, message } = errors['unknown-error']

    const errorTitle = await screen.findByText(title)
    const errorMessage = await screen.findByText(message)

    expect(errorTitle).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
  })

  it('Should show empty message', async () => {
    mockedUseSearchParallelCategories.mockReturnValueOnce({
      data: [],
      isLoading: false,
      error: false
    })

    renderWithProviders(
      <Category
        params={{
          category: 'people'
        }}
      />
    )

    // eslint-disable-next-line sonarjs/no-duplicate-string
    const { message, title } = errors['not-found-popular-searches']

    const errorTitle = await screen.findByText(title)
    const errorMessage = await screen.findByText(message)
    expect(errorTitle).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
  })
})
