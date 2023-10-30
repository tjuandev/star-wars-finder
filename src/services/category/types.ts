export interface CategoryData {
  name: string
  url: string
  [key: string]: string | string[]
}

export interface CategoryResponse {
  results: CategoryData[]
}

export interface AdaptedCategoryData {
  id?: string
  name: string
  details: Record<string, string>
}

export interface UseSearchCategoryProps {
  category: StarWarsCategories
  searchValue: string | null
}

export type SearchCategoryProps = UseSearchCategoryProps
