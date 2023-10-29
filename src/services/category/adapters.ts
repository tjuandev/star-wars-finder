import type { CategoryResponse } from './types'

const detailsBlacklist = ['id', 'name', 'url', 'created', 'edited']

export const adaptResponse = (response?: CategoryResponse) => {
  if (!response) return []

  const { results } = response

  return results.map(result => {
    const id = result.url.split('/')[5]

    const details = Object.entries(result).reduce<Record<string, string>>(
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
      ...result,
      id,
      details
    }
  })
}
