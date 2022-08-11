import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#87E1DF',
      contrastText: '#023535',
    },
    secondary: {
      main: '#023535',
      contrastText: 'white',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },

  typography: {
    h2: {
      fontFamily: 'Rubik',
      fontSize: '20px',
      fontWeight: '600',
    },

    body1: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '300',
    },
  },
})

export default theme
