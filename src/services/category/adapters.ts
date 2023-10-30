import type {
  AdaptedCategoryData,
  CategoryData,
  CategoryResponse
} from './types'

const detailsBlacklist = ['id', 'name', 'url', 'created', 'edited', 'title']

const adaptCategory = (category: CategoryData) => {
  const id = category.url.split('/')[5] || ''

  const details = Object.entries(category).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      const isUrl = typeof value === 'string' && value.startsWith('http')

      const hasToHideValue =
        detailsBlacklist.includes(key) ||
        isUrl ||
        !value ||
        typeof value === 'object'

      if (!hasToHideValue) {
        acc[key] = value
      }

      return acc
    },
    {}
  )

  return {
    ...category,
    id,
    details
  }
}

export const adaptCategoriesResponse = (
  response?: CategoryResponse
): AdaptedCategoryData[] => {
  if (!response) return []

  const { results } = response
  return results.map(adaptCategory)
}

export const adaptPopularSearchesResponse = (
  data?: CategoryData
): AdaptedCategoryData => {
  if (!data) return {} as AdaptedCategoryData

  return adaptCategory(data)
}
