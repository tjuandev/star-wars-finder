import type { MainProvidersProps } from './types'
import type { ReactNode } from 'react'
import { ReduxProvider } from './ReduxProvider'
import { ReactQueryProvider } from './ReactQueryProvider'

const MainProvider = ({ children }: MainProvidersProps): ReactNode => {
  return (
    <ReduxProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ReduxProvider>
  )
}

export default MainProvider
