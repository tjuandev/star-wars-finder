import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from '..'

const meta = {
  title: 'Molecules/SearchBar',
  component: SearchBar
} satisfies Meta<typeof SearchBar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'value'
  }
}
