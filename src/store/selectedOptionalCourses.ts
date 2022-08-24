/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OptionalCourse, OptionalCoursesStore, RootState } from '@/types'

const initialState: OptionalCoursesStore = {
  selectedOptionalCourses: [],
}

export const selectedOptionalCoursesSlice = createSlice({
  name: 'selectedOptionalCourses',
  initialState,
  reducers: {
    setSelectedOptionalCourses: (
      state,
      action: PayloadAction<OptionalCourse[]>
    ) => {
      state.selectedOptionalCourses = action.payload
    },
  },
})

export const { setSelectedOptionalCourses } =
  selectedOptionalCoursesSlice.actions

export default selectedOptionalCoursesSlice.reducer

export const selectSelectedOptionalCourses = (state: RootState) =>
  state.selectedOptionalCourses.selectedOptionalCourses
