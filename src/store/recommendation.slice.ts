import { createSlice } from '@reduxjs/toolkit'

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
    getAcademicHistoryData: () => {
      //   state.academicHistory = something
    },
  },
})

export const { getAcademicHistoryData } = recommendationSlice.actions

export default recommendationSlice.reducer
