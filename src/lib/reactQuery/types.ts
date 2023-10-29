import { type UseMutationOptions } from '@tanstack/react-query'
import { type AxiosError } from 'axios'

export type QueryError = AxiosError<
  {
    message: string
  },
  unknown
>

export type Options<TData, TParam, TContext = unknown> = Omit<
  UseMutationOptions<TData, QueryError, TParam, TContext>,
  'mutationFn'
>

export type Value<Data, P = undefined> = Data | ((data: P) => Data)
