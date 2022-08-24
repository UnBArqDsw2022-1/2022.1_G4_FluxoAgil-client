import { recommendationApi } from '@/api'
import { configureStore } from '@reduxjs/toolkit'
import recommendation from './recommendation'
import optionalCourses from './optionalCourses'

export default configureStore({
  reducer: {
    recommendation,
    [recommendationApi.reducerPath]: recommendationApi.reducer,
    optionalCourses,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(recommendationApi.middleware),
})
