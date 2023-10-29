'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { MainProvidersProps } from './types'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export const ReactQueryProvider = ({
  children,
  showReactQueryDevtools = true
}: MainProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient())

  const isDev = process.env.NODE_ENV === 'development'
  const hasToShowDevTools = isDev && showReactQueryDevtools

  return (
    <QueryClientProvider client={queryClient}>
      {hasToShowDevTools && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  )
}
