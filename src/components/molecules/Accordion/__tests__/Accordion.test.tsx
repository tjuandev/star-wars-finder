import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import { Accordion } from '..'
import event from 'testHelpers/providers/helpFunctions'

describe('[Component:Molecules] Accordion', () => {
  const user = event()

  it('Should toggle content when clicking on header', async () => {
    const title = 'Accordion title'
    const content =
      'Accordion content Accordion content Accordion content Accordion content Accordion content Accordion content'

    renderWithProviders(<Accordion title={title}>{content}</Accordion>)

    const accordionHeader = screen.getByRole('button')
    let accordionContent = screen.queryByText(content)

    expect(accordionContent).not.toBeInTheDocument()

    await user.click(accordionHeader)

    accordionContent = screen.getByText(content)

    expect(accordionContent).toBeInTheDocument()
  })
})
