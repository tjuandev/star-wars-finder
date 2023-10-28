import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '..'
import { LightsaberIcon } from 'components/atoms/Icons'

const meta = {
  title: 'Atoms/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button'
  }
}

export const WithIcon: Story = {
  args: {
    children: 'Button',
    uppercase: true,
    icon: <LightsaberIcon />
  }
}
