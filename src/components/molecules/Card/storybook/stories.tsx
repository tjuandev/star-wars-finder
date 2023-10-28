import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '..'
import people from '@/public/images/categories/people.png'

const meta = {
  title: 'Molecules/Card',
  component: Card
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: people,
    alt: 'People category',
    title: 'People',
    href: '/people'
  }
}
