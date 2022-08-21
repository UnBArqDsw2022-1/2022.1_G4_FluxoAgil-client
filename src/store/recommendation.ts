/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AcademicHistory, RecommendationStore, RootState } from '@/types'

const initialState: RecommendationStore = {
  academicHistory: null,
}

export const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState,
  reducers: {
    setAcademicHistoryData: (state, action: PayloadAction<AcademicHistory>) => {
      state.academicHistory = action.payload
    },
  },
})

export const { setAcademicHistoryData } = recommendationSlice.actions

export default recommendationSlice.reducer

export const selectAcademicHistory = (state: RootState) =>
  state.recommendation.academicHistory
