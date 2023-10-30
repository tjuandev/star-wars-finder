export interface CategoryData {
  name: string
  url: string
  [key: string]: string | string[]
}

export interface CategoryResponse {
  results: CategoryData[]
}

export interface AdaptedCategoryData {
  name: string
  details: Record<string, string>
  id: string
  title?: string
}

export interface UseSearchCategoryProps {
  category: StarWarsCategories
  searchValue: string | null
}

export type useSearchParallelCategoriesProps = string[]

export type SearchCategoryProps = Partial<UseSearchCategoryProps> & {
  id?: string
}
