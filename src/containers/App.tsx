import { useSelector } from 'react-redux'

import { Box, Container } from '@mui/material'
import Header from '@/components/Header'
import Guide from '@/components/Guide'
import RecommendationOptions from '@/components/RecommendationOptions'
import AcademicHistoryUpload from '@/components/AcademicHistoryUpload'

import { selectAcademicHistory } from '@/store/recommendation'

function App() {
  const academicHistory = useSelector(selectAcademicHistory)

  return (
    <Box height="100vh">
      <Header />

      <Box py={5}>
        <Container maxWidth="md">
          {academicHistory ? (
            <RecommendationOptions />
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
