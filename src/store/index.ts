import { recommendationApi } from '@/api'
import { configureStore } from '@reduxjs/toolkit'
import recommendation from './recommendation'

// https://www.freecodecamp.org/news/how-to-manage-state-in-a-react-app/

export default configureStore({
  reducer: {
    recommendation,
    [recommendationApi.reducerPath]: recommendationApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(recommendationApi.middleware),
})
