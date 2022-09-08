import store from '@/store'

interface AcademicHistoryWorkload {
  required: number
  integrated: number
  pending: number
}

// TODO Remover opcionais após adicionar parâmetros na resposta do back-end
export interface AcademicHistory {
  curriculumId: string
  approvedCourses: string[]
  workload: {
    mandatory: AcademicHistoryWorkload
    optional: AcademicHistoryWorkload
    supplementary: AcademicHistoryWorkload
    total: AcademicHistoryWorkload
  }
}

export interface OptionalCourse {
  id: string
  title: string
  workloadInHours: number
}

export interface RecommendationOptions {
  selectedOptionalCourses: OptionalCourse[]
}

export interface Course {
  id: string
  title: string
  prerequisites: string[]
}

export interface Period {
  credits: number
  courses: Course[]
}

export interface Recommendation {
  maxCreditsByPeriod: number
  periods: Period[]
}

export interface RecommendationStore {
  academicHistory: AcademicHistory | null
  options: RecommendationOptions
  recommendation: Recommendation | null
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
