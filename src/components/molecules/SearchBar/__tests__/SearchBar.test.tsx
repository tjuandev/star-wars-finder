import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { SearchBar } from '..'
import event from 'testHelpers/providers/helpFunctions'

describe('[Component:Molecules] SearchBar', () => {
  const user = event()

  it('should call onSearch when submit form', async () => {
    const onSearch = vi.fn()
    const onChange = vi.fn()

    renderWithProviders(
      <SearchBar value="value" onSearch={onSearch} onChange={onChange} />
    )

    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(onSearch).toHaveBeenCalledTimes(1)
  })
})
