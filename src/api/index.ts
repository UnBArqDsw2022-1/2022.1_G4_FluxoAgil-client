import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recommendationApi = createApi({
  reducerPath: 'recommendationApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    fetchAcademicHistoryData: builder.mutation({
      query: (academicHistory: File) => {
        const formData = new FormData()
        formData.append('file', academicHistory)

        return {
          url: 'academic-history',
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        }
      },
      // transformResponse: response => response.data,
    }),
  }),
})

export const { useFetchAcademicHistoryDataMutation } = recommendationApi
