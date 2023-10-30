import type { Meta, StoryObj } from '@storybook/react'
import { ErrorMessage } from '..'

const meta = {
  title: 'Molecules/ErrorMessage',
  component: ErrorMessage
} satisfies Meta<typeof ErrorMessage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: 'This is a message',
    title: 'This is a title'
  }
}

export const WithButton: Story = {
  args: {
    message: 'This is a message',
    title: 'This is a title',
    helpButtonProps: {
      children: 'Help Button'
    }
  }
}
