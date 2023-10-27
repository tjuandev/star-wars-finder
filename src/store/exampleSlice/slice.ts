import { createSlice } from '@reduxjs/toolkit'
import type { CountSliceData } from './types'

const initialState: CountSliceData = {
  count: 0
}

const exampleSlice = createSlice({
  initialState,
  name: 'dynamicForm',
  reducers: {
    increment(state) {
      state.count++
    }
  }
})

export const { increment } = exampleSlice.actions

export const dynamicForm = exampleSlice.reducer
