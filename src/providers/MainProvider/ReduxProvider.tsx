'use client'
import { Provider } from 'react-redux'
import { store } from 'store/configStore'
import type { MainProvidersProps } from './types'

export const ReduxProvider = ({ children }: MainProvidersProps) => {
  return <Provider store={store}>{children}</Provider>
}
