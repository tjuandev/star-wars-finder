import { combineReducers } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import * as Reducers from './reducers'
import { storage } from './storage'

const whitelist = ['dynamicForm']

const persistConfig = {
  key: 'root',
  storage,
  whitelist
}

const rootReducer = combineReducers({ ...Reducers })

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const serializableCheck = {
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
}
