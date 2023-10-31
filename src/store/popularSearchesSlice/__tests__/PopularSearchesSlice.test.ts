import { addRankingToCategory } from '../slice'
import type { AddRankingPayload, PopularSearchesPerCategory } from '../types'

describe('[Reducer] addRankingToCategory', () => {
  it('should add new category if it does not exist', () => {
    const data = {} as PopularSearchesPerCategory
    const payload: AddRankingPayload = { id: '1', category: 'people', count: 0 }

    const result = addRankingToCategory(data, payload)
    expect(result?.people?.[0]?.id).toBe('1')
    expect(result?.people?.[0]?.count).toBe(1)
  })

  it('should increment the count of an existing item in a category', () => {
    const data = {
      people: [{ id: '1', count: 1 }]
    } as PopularSearchesPerCategory
    const payload: AddRankingPayload = { id: '1', category: 'people', count: 0 }

    const result = addRankingToCategory(data, payload)
    expect(result?.people?.[0]?.id).toBe('1')
    expect(result?.people?.[0]?.count).toBe(2)
  })

  it('should add a new item to a category', () => {
    const data = {
      people: [{ id: '1', count: 1 }]
    } as PopularSearchesPerCategory
    const payload: AddRankingPayload = { id: '2', category: 'people', count: 0 }

    const result = addRankingToCategory(data, payload)
    expect(result?.people?.[0]?.id).toBe('1')
    expect(result?.people?.[0]?.count).toBe(1)
    expect(result?.people?.[1]?.id).toBe('2')
    expect(result?.people?.[1]?.count).toBe(1)
  })

  it('should sort the items in a category by count', () => {
    const data = {
      people: [
        { id: '1', count: 1 },
        { id: '2', count: 2 }
      ]
    } as PopularSearchesPerCategory
    const payload: AddRankingPayload = { id: '3', category: 'people', count: 3 }

    const result = addRankingToCategory(data, payload)

    expect(result?.people?.[0]?.count).toBe(4)
    expect(result?.people?.[1]?.count).toBe(2)
    expect(result?.people?.[2]?.count).toBe(1)
  })
})
