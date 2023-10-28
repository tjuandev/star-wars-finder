import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { Card } from '..'

const imageSrc = 'https://via.placeholder.com/150'
const srcTransformedByNextImage =
  '/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F150&w=640&q=75'

describe('[Component:Molecules] Card', () => {
  it('should render with custom image and title', () => {
    renderWithProviders(
      <Card
        src={imageSrc}
        alt="placeholder"
        title="title"
        imgHeight={200}
        imgWidth={200}
      />
    )
    const image = screen.getByRole('img')
    const title = screen.getByText('title')

    expect(title).toBeInTheDocument()
    expect(image).toHaveAttribute('src', srcTransformedByNextImage)
  })
})
