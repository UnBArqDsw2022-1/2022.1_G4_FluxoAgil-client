import { configureStore } from '@reduxjs/toolkit'
import recommendation from './recommendation.slice'

// https://www.freecodecamp.org/news/how-to-manage-state-in-a-react-app/

export default configureStore({
  reducer: {
    recommendation,
  },
})
