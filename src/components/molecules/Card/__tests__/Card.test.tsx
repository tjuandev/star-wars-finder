import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { Card } from '..'

const imageSrc = 'https://via.placeholder.com/150'

describe('[Component:Molecules] Card', () => {
  it('should render with title', () => {
    renderWithProviders(
      <Card
        src={imageSrc}
        alt="placeholder"
        title="title"
        imgHeight={200}
        imgWidth={200}
        href="/"
      />
    )

    const title = screen.getByText('title')
    expect(title).toBeInTheDocument()
  })
})
