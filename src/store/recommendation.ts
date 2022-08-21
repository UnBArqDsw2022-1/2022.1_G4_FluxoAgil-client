/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store'

interface AcademicHistoryWorkload {
  required: number
  integrated: number
  pending: number
}

interface AcademicHistory {
  curriculumId: string
  approvedCourses: string[]
  workload: {
    mandatory: AcademicHistoryWorkload
    optional: AcademicHistoryWorkload
    supplementary: AcademicHistoryWorkload
    total: AcademicHistoryWorkload
  }
}

interface RecommendationStore {
  academicHistory: AcademicHistory | null
}

const initialState: RecommendationStore = {
  academicHistory: null,
}

export const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState,
  reducers: {
    setAcademicHistoryData: (state, action) => {
      state.academicHistory = action.payload
    },
  },
})

export const { setAcademicHistoryData } = recommendationSlice.actions

export default recommendationSlice.reducer

export const selectAcademicHistory = (state: RootState) =>
  state.recommendation.academicHistory
