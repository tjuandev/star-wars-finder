import { httpClient } from 'lib/httpClient'
import { useFetch, useParallelFetch } from 'lib/reactQuery'
import type {
  CategoryResponse,
  SearchCategoryProps,
  UseSearchCategoryProps,
  useSearchParallelCategoriesProps
} from './types'
import { adaptResponse } from './adapters'

const searchCategory = async ({
  category,
  searchValue,
  id
}: SearchCategoryProps) => {
  const { data } = await httpClient.get<CategoryResponse>(
    `/${category}/${id}`,
    {
      params: {
        search: searchValue
      }
    }
  )
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

  const data = adaptResponse(response)

  return { data, ...result }
}

export const useSearchParallelCategories = (
  ids: useSearchParallelCategoriesProps
) => {
  const results = useParallelFetch<CategoryResponse>(
    ids.map(id => ({
      queryKey: ['category', id],
      queryFn: async () =>
        await searchCategory({
          id
        }),
      enabled: !!id
    }))
  )

  const adaptedData = results.map(result => adaptResponse(result.data))
  const data = adaptedData.reduce((acc, val) => acc.concat(val), [])

  return { data }
}
