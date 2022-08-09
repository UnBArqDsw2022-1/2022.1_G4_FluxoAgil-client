import { AppBar, Box, Toolbar } from '@mui/material'
import Button from './components/Button'

function App() {
  return (
    <AppBar>
      <Toolbar>
        <Box width="100%" display="flex">
          <div>Fluxo Ágil</div>
        </Box>

        <Box display="flex">
          <Button>Docs</Button>

          <Button>Sobre</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default App
