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

    const input = screen.getByRole('searchbox')
    const searchButton = screen.getByRole('button', { name: /search/i })

    await user.type(input, 'search')
    await user.click(searchButton)

    expect(onSearch).toHaveBeenCalledWith('search')
  })

  it('Should render helpText', () => {
    const helpText = 'helpText'
    const onSearch = vi.fn()

    renderWithProviders(
      <SearchBar
        placeholder="Search here"
        helpText={helpText}
        onSearch={onSearch}
      />
    )

    expect(screen.getByText(helpText)).toBeInTheDocument()
  })
})
