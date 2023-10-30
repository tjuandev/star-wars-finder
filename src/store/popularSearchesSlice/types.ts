export type Item = {
  id: string
  name?: string
  details?: Record<string, string | string[]>
  count?: number
}

export type PopularSearchesPerCategory = Record<StarWarsCategories, Item[]>
export interface PopularSearchesState {
  data: PopularSearchesPerCategory
}

export type AddRankingPayload = Item & {
  category: StarWarsCategories
}
