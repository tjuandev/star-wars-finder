import { httpClient } from 'lib/httpClient'
import { useFetch, useParallelFetch } from 'lib/reactQuery'
import type {
  AdaptedCategoryData,
  CategoryData,
  CategoryResponse,
  SearchCategoryProps,
  UseSearchCategoryProps,
  useSearchParallelCategoriesProps
} from './types'
import {
  adaptCategoriesResponse,
  adaptPopularSearchesResponse
} from './adapters'

const searchCategory = async <Response = CategoryResponse>({
  category,
  searchValue,
  id
}: SearchCategoryProps) => {
  const url = id ? `/${category}/${id}` : `/${category}`
  const { data } = await httpClient.get<Response>(url, {
    params: {
      search: searchValue
    }
  })
  return data
}

export const useSearchCategory = ({
  category,
  searchValue
}: UseSearchCategoryProps) => {
  const { data: response, ...result } = useFetch<CategoryResponse>({
    queryKey: ['category', category, searchValue],
    queryFn: async () => await searchCategory({ category, searchValue }),
    enabled: !!category && !!searchValue
  })

  const data = adaptCategoriesResponse(response)
  return { data, ...result }
}

export const useSearchParallelCategories = ({
  ids = [],
  category
}: useSearchParallelCategoriesProps) => {
  const results = useParallelFetch<CategoryData, AdaptedCategoryData>(
    ids?.map(id => ({
      queryKey: [category, id],
      queryFn: async () =>
        await searchCategory<CategoryData>({
          id,
          category
        }),
      enabled: !!id,
      select(data) {
        return adaptPopularSearchesResponse(data)
      }
    }))
  )

  const isLoading = results.some(result => result.isLoading)
  const data = results.map(result => result.data)
  const error = results.some(result => result.error)

  return { data, isLoading, error }
}
