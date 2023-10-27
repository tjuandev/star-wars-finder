import type { MainProvidersProps } from './types'
import type { ReactNode } from 'react'
import { ReduxProvider } from './ReduxProvider'

const MainProvider = ({ children }: MainProvidersProps): ReactNode => {
  return <ReduxProvider>{children}</ReduxProvider>
}

export default MainProvider
