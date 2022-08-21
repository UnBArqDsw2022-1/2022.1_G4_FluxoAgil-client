import { recommendationApi } from '@/api'
import { configureStore } from '@reduxjs/toolkit'
import recommendation from './recommendation'

const store = configureStore({
  reducer: {
    recommendation,
    [recommendationApi.reducerPath]: recommendationApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(recommendationApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
