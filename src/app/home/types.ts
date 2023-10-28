export type Category =
  | 'people'
  | 'planets'
  | 'films'
  | 'species'
  | 'vehicles'
  | 'starships'

export type CategoriesList = Array<{
  title: Category
  src: string
}>
