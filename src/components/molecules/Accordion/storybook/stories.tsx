import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '..'

const meta = {
  title: 'Molecules/Accordion',
  component: Accordion
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Accordion title',
    content:
      'Accordion content Accordion content Accordion content Accordion content Accordion content Accordion content'
  }
}
