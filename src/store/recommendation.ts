/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AcademicHistory,
  OptionalCourse,
  RecommendationStore,
  RootState,
} from '@/types'

const initialState: RecommendationStore = {
  academicHistory: null,
  options: {
    selectedOptionalCourses: [],
  },
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
  },
})

export const { setAcademicHistoryData, setSelectedOptionalCourses } =
  recommendationSlice.actions

export default recommendationSlice.reducer

export const selectAcademicHistory = (state: RootState) =>
  state.recommendation.academicHistory

export const selectSelectedOptionalCourses = (state: RootState) =>
  state.recommendation.options.selectedOptionalCourses
