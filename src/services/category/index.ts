import { httpClient } from 'lib/httpClient'
import { useFetch } from 'lib/reactQuery'
import type {
  CategoryResponse,
  SearchCategoryProps,
  UseSearchCategoryProps
} from './types'
import { adaptResponse } from './adapters'

const searchCategory = async ({
  category,
  searchValue
}: SearchCategoryProps) => {
  const { data } = await httpClient.get<CategoryResponse>(`/${category}`, {
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

  const data = adaptResponse(response)

  return { data, ...result }
}
