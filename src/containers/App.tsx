import { Box, Container } from '@mui/material'

import Header from '@/components/Header'
import Guide from '@/components/Guide'
import UploadArea from '@/components/UploadArea'
import { useSelector } from 'react-redux'
import { selectAcademicHistory } from '@/store/recommendation'
import RecommendationOptions from '@/components/RecommendationOptions'

function App() {
  const academicHistory = useSelector(selectAcademicHistory)

  return (
    <Box height="100vh">
      <Header />

      <Box py={5}>
        <Container maxWidth="md">
          {academicHistory ? <RecommendationOptions /> : <UploadArea />}

          <Guide />
        </Container>
      </Box>
    </Box>
  )
}

export default App
