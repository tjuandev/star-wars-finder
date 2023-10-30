import { useQueries, type UseQueryOptions } from '@tanstack/react-query'
import type { QueryError } from './types'

export const useParallelFetch = <Data, AdaptedData = Data, Error = QueryError>(
  config: Array<UseQueryOptions<Data, Error, AdaptedData>>
) => {
  return useQueries({
    queries: config
  })
}
