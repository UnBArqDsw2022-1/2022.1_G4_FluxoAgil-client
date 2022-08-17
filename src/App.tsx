import { Box, Container } from '@mui/material'

import Header from './components/Header'
import Guide from './components/Guide'
import UploadArea from './components/UploadArea'

function App() {
  return (
    <Box height="100vh">
      <Header />

      <Box py={5}>
        <Container maxWidth="md">
          <UploadArea />

          <Guide />
        </Container>
      </Box>
    </Box>
  )
}

export default App
