import renderWithProviders from 'testHelpers/providers/components'
import Category from '../page'
import { redirect } from 'next/navigation'

vi.mock('next/navigation', () => ({
  redirect: vi.fn()
}))

describe('Page Category', () => {
  it('Should redirect to not-found page', () => {
    renderWithProviders(
      <Category
        params={{
          category: 'not-found'
        }}
      />
    )

    expect(redirect).toHaveBeenCalledWith('/not-found')
  })
})
