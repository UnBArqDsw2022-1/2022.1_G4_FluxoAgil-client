import { Box, Container } from '@mui/material'

import Header from './components/Header'
import UploadComponent from './components/UploadComponent'
import Guide from './components/Guide'

function App() {
  return (
    <Box height="100vh">
      <Header />

      <Container maxWidth="md">
        <Box py={3}>
          <UploadComponent
            onFileSelected={() => {
              return ''
            }}
          />
        </Box>

        <Box py={3}>
          <Guide />
        </Box>
      </Container>
    </Box>
  )
}

export default App
