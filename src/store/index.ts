import { recommendationApi } from '@/api'
import { configureStore } from '@reduxjs/toolkit'
import recommendation from './recommendation'

export default configureStore({
  reducer: {
    recommendation,
    [recommendationApi.reducerPath]: recommendationApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(recommendationApi.middleware),
})
