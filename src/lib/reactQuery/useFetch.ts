import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import type { QueryError } from './types'

export const useFetch = <Data, Error = QueryError>(
  config: UseQueryOptions<Data, Error>
) => {
  const context = useQuery<Data, Error, Data>(config)

  return {
    ...context
  }
}
