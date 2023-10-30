import { useQueries, type UseQueryOptions } from '@tanstack/react-query'
import type { QueryError } from './types'

export const useParallelFetch = <Data, Error = QueryError>(
  config: Array<UseQueryOptions<Data, Error>>
) => {
  return useQueries({
    queries: config
  })
}
