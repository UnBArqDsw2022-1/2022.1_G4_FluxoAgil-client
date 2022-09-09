/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AcademicHistory,
  OptionalCourse,
  RecommendationStore,
  Recommendation,
  RootState,
} from '@/types'
// eslint-disable-next-line import/extensions
import RecommendationExample from '../assets/RecommendationExample.json' assert { type: 'JSON' }

const initialState: RecommendationStore = {
  academicHistory: null,
  options: {
    selectedOptionalCourses: [],
  },
  recommendation: RecommendationExample,
}

export const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState,
  reducers: {
    setAcademicHistoryData: (state, action: PayloadAction<AcademicHistory>) => {
      state.academicHistory = action.payload
    },
    setSelectedOptionalCourses: (
      state,
      action: PayloadAction<OptionalCourse[]>
    ) => {
      state.options.selectedOptionalCourses = action.payload
    },
    getRecommendation: (state, action: PayloadAction<Recommendation>) => {
      state.recommendation = action.payload
    },
    resetRecommendation: () => initialState,
  },
})

export const {
  setAcademicHistoryData,
  setSelectedOptionalCourses,
  resetRecommendation,
} = recommendationSlice.actions

export default recommendationSlice.reducer

export const selectAcademicHistory = (state: RootState) =>
  state.recommendation.academicHistory

export const selectSelectedOptionalCourses = (state: RootState) =>
  state.recommendation.options.selectedOptionalCourses

export const selectRecommendationOptions = (state: RootState) =>
  state.recommendation.options

export const selectRecommendation = (state: RootState) =>
  state.recommendation.recommendation
