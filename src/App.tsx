import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import Button from './components/Button'

function App() {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Box width="100%" display="flex">
            <Typography>
              <Box fontWeight="bold">Fluxo Ágil</Box>
            </Typography>
          </Box>

          <Box display="flex">
            <Button
              href="https://github.com/UnBArqDsw2022-1/2022.1_G4_FluxoAgil"
              target="_blank"
            >
              Docs
            </Button>

            <Button disabled>Sobre</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default App
