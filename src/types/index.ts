import store from '@/store'

interface AcademicHistoryWorkload {
  required: number
  integrated: number
  pending: number
}

// TODO Remover opcionais após adicionar parâmetros na resposta do back-end
export interface AcademicHistory {
  curriculumId?: string
  approvedCourses: string[]
  workload?: {
    mandatory: AcademicHistoryWorkload
    optional: AcademicHistoryWorkload
    supplementary: AcademicHistoryWorkload
    total: AcademicHistoryWorkload
  }
}

export interface RecommendationStore {
  academicHistory: AcademicHistory | null
}

type OptionalCourse = {
  id: string
  title: string
  workloadInHours: number
}

export interface OptionalCoursesStore {
  selectedOptionalCourses: OptionalCourse[]
}

export type { OptionalCourse }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
