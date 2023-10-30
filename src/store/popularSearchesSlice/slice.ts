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

const customComparator = (a: Item, b: Item) => {
  return (b.count || 0) - (a.count || 0)
}

const popularSearchesSlice = createSlice({
  initialState,
  name: 'popularSearches',
  reducers: {
    getPopularSearches(state) {
      return state
    },
    addToRanking(state, action: PayloadAction<AddRankingPayload>) {
      const { id, category, ...restOfPayload } = action.payload

      if (!state.data[category]) {
        state.data[category] = []
      }

      const existingItemIndex = state.data[category].findIndex(
        item => item.id === id
      )

      if (existingItemIndex !== -1) {
        const existingItem = state.data[category][existingItemIndex]
        if (existingItem?.count) {
          existingItem.count += 1
        }
      } else {
        const newItem: Item = {
          id,
          count: (restOfPayload.count || 0) + 1
        }
        state.data[category].push(newItem)
      }

      state.data[category].sort(customComparator)
    }
  }
})

export const { addToRanking } = popularSearchesSlice.actions
export const popularSearches = popularSearchesSlice.reducer
