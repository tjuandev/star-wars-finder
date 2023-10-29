import type { MainProvidersProps } from './types'
import type { ReactNode } from 'react'
import { ReduxProvider } from './ReduxProvider'
import { ReactQueryProvider } from './ReactQueryProvider'

const MainProvider = ({
  children,
  showReactQueryDevtools
}: MainProvidersProps): ReactNode => {
  return (
    <ReduxProvider>
      <ReactQueryProvider showReactQueryDevtools={showReactQueryDevtools}>
        {children}
      </ReactQueryProvider>
    </ReduxProvider>
  )
}

export default MainProvider
