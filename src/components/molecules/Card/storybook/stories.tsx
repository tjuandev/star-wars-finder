import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '..'
import darth_vader from '@/public/images/darth_vader.png'

const meta = {
  title: 'Molecules/Card',
  component: Card
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: darth_vader,
    alt: 'Darth Vader',
    title: 'People'
  }
}
