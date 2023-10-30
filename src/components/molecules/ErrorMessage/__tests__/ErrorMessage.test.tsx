import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { ErrorMessage } from '..'

describe('[Component:Molecules] ErrorMessage', () => {
  it('Should render title and message', () => {
    renderWithProviders(<ErrorMessage title="Title" message="Message" />)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Message')).toBeInTheDocument()
  })

  it('Should render help button', () => {
    renderWithProviders(
      <ErrorMessage
        title="Title"
        message="Message"
        helpButtonProps={{ children: 'Help' }}
      />
    )
    expect(screen.getByText('Help')).toBeInTheDocument()
  })
})
