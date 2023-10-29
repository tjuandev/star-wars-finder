'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { MainProvidersProps } from './types'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export const ReactQueryProvider = ({ children }: MainProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  )
}
