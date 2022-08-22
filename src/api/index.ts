import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:5000'

export const recommendationApi = createApi({
  reducerPath: 'recommendationApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    fetchAcademicHistoryData: builder.mutation({
      query: (academicHistory: File) => {
        const formData = new FormData()
        formData.append('file', academicHistory)

        return {
          url: 'academic-history',
          method: 'POST',
          body: formData,
        }
      },
      // transformResponse: response => response.data,
    }),
  }),
})

export const { useFetchAcademicHistoryDataMutation } = recommendationApi
