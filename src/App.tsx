import { Box, Container } from '@mui/material'

import Header from './components/Header'
import UploadComponent from './components/UploadComponent'
import Guide from './components/Guide'

function App() {
  return (
    <Box height="100vh">
      <Header />

      <Container>
        <UploadComponent
          onFileSelected={() => {
            return ''
          }}
        />

        <Guide />
      </Container>
    </Box>
  )
}

export default App
