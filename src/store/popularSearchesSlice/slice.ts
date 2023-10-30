import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
  PopularSearchesPerCategory,
  PopularSearchesState,
  AddRankingPayload
} from './types'

const initialState: PopularSearchesState = {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  data: {} as PopularSearchesPerCategory
}

const popularSearchesSlice = createSlice({
  initialState,
  name: 'popularSearches',
  reducers: {
    getPopularSearches(state) {
      return state
    },
    addToRanking(state, action: PayloadAction<AddRankingPayload>) {}
  }
})

export const { addToRanking } = popularSearchesSlice.actions

export const popularSearches = popularSearchesSlice.reducer
