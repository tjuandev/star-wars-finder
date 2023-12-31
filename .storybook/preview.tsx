import type { Preview } from '@storybook/react'
import viewports from './viewports'
import './style.scss'
import '../src/theme/global.scss'
import MainProvider from '../src/providers/MainProvider'

const preview: Preview = {
  decorators: [
    (Story) => (
      <MainProvider showReactQueryDevtools={false}>
        <Story />
      </MainProvider>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'light'
    },
    viewport: {
      viewports
    },
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'centered'
  }
}

export default preview
