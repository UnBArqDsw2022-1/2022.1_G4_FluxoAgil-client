import { Box, Container } from '@mui/material'
import Guide from './components/Guide'
import Header from './components/Header'

function App() {
  return (
    <Box height="100vh">
      <Header />

      <Container>
        <Guide />
      </Container>
    </Box>
  )
}

export default App
