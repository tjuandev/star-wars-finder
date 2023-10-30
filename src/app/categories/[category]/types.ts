import type { AdaptedCategoryData } from 'services/category/types'

export interface PageProps {
  params: {
    category?: StarWarsCategories
  }
}

export interface MainProps {
  category: StarWarsCategories
  searchValue: string | null
}

export interface CategoryProps extends AdaptedCategoryData {
  category: StarWarsCategories
}
