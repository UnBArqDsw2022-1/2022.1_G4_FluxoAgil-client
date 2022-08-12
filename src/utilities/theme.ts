import { createTheme } from '@mui/material/styles'

const colors = {
  'green-1': '#0FC2C0',
  'green-2': '#0CABA8',
  'green-3': '#008F8C',
  'green-4': '#015958',
  'green-5': '#023535',
}

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
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors['green-3'],
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
