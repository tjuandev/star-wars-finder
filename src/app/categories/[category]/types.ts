export interface PageProps {
  params: {
    category?: StarWarsCategories
  }
}

export interface MainProps {
  category: StarWarsCategories
  searchValue: string | null
}
