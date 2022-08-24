import { recommendationApi } from '@/api'
import { configureStore } from '@reduxjs/toolkit'
import recommendation from './recommendation'
import selectedOptionalCourses from './selectedOptionalCourses'

export default configureStore({
  reducer: {
    recommendation,
    [recommendationApi.reducerPath]: recommendationApi.reducer,
    selectedOptionalCourses,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(recommendationApi.middleware),
})
