/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
  PopularSearchesPerCategory,
  PopularSearchesState,
  AddRankingPayload,
  Item
} from './types'

const initialState: PopularSearchesState = {
  data: {} as PopularSearchesPerCategory
}

export const addRankingToCategory = (
  data: PopularSearchesPerCategory,
  payload: AddRankingPayload
): PopularSearchesPerCategory => {
  const { id, category, ...restOfPayload } = payload

  if (!data[category]) {
    data[category] = []
  }

  const existingItemIndex = data[category].findIndex(item => item.id === id)

  if (existingItemIndex !== -1) {
    const existingItem = data[category][existingItemIndex]
    if (existingItem?.count) {
      existingItem.count += 1
    }
  } else {
    const newItem: Item = {
      id,
      count: (restOfPayload.count || 0) + 1
    }
    data[category].push(newItem)
  }

  data[category].sort((a: Item, b: Item) => {
    return (b.count || 0) - (a.count || 0)
  })

  return data
}

/* c8 ignore start */
const popularSearchesSlice = createSlice({
  initialState,
  name: 'popularSearches',
  reducers: {
    getPopularSearches(state) {
      return state
    },
    addToRanking(state, action: PayloadAction<AddRankingPayload>) {
      state.data = addRankingToCategory(state.data, action.payload)
    }
  }
})
/* c8 ignore stop */

export const { addToRanking } = popularSearchesSlice.actions
export const popularSearches = popularSearchesSlice.reducer
