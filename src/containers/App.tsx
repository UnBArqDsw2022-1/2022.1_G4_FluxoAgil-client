import { useSelector } from 'react-redux'

import { Box, Container } from '@mui/material'
import Header from '@/components/Header'
import Guide from '@/components/Guide'
import AcademicHistoryUpload from '@/components/AcademicHistoryUpload'

import { selectAcademicHistory } from '@/store/recommendation'
import RecommendationSettings from '@/components/RecommendationSettings'

function App() {
  const academicHistory = useSelector(selectAcademicHistory)

  return (
    <Box height="100vh">
      <Header />

      <Box py={5}>
        <Container maxWidth="md">
          {!academicHistory ? (
            <RecommendationSettings />
          ) : (
            <AcademicHistoryUpload />
          )}

          <Guide />
        </Container>
      </Box>
    </Box>
  )
}

export default App
