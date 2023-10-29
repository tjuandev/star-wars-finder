import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { SearchBar } from '..'
import event from 'testHelpers/providers/helpFunctions'

describe('[Component:Molecules] SearchBar', () => {
  const user = event()

  it('should call onSearch when submit form', async () => {
    const onSearch = vi.fn()

    renderWithProviders(
      <SearchBar placeholder="Search here" onSearch={onSearch} />
    )

    const input = screen.getByPlaceholderText(/search here/i)

    await user.type(input, 'search')
    await user.click(screen.getByRole('button', { name: /search/i }))

    expect(onSearch).toHaveBeenCalledWith('search')
  })
})
