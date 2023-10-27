import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { persistedReducer, serializableCheck } from './persistConfig'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck }),
  reducer: persistedReducer
})

export const persistor = persistStore(store)
