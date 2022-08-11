import { ThemeProvider } from '@mui/material/styles'
import { ChakraProvider } from '@chakra-ui/react'
import { Router } from './router'
import theme from './utilities/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider resetCSS={false}>
        <Router />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default App
