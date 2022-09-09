import { useSelector } from 'react-redux'

import { Box, Container } from '@mui/material'
import Header from '@/components/Header'
import Guide from '@/components/Guide'
import AcademicHistoryUpload from '@/components/AcademicHistoryUpload'

import {
  selectAcademicHistory,
  selectRecommendation,
} from '@/store/recommendation'
import RecommendationSettings from '@/components/RecommendationSettings'
import Recommendation from '@/components/Recommendation'

function App() {
  const academicHistory = useSelector(selectAcademicHistory)
  const recommendation = useSelector(selectRecommendation)

  return (
    <Box height="100vh">
      <Header />

      <Box py={5}>
        {recommendation ? (
          <Container maxWidth="xl">
            <Recommendation />
          </Container>
        ) : (
          <Container maxWidth="md">
            {academicHistory ? (
              <RecommendationSettings />
            ) : (
              <AcademicHistoryUpload />
            )}

            <Guide />
          </Container>
        )}
      </Box>
    </Box>
  )
}

export default App
