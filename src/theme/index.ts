import { createTheme } from '@mui/material/styles'

export const colors = {
  'green-1': '#0FC2C0',
  'green-2': '#0CABA8',
  'green-3': '#008F8C',
  'green-4': '#015958',
  'green-5': '#023535',
}

const typography = {
  h2: {
    fontFamily: 'Rubik',
    fontSize: '1.25rem',
    fontWeight: '600',
  },
  body1: {
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontWeight: '400',
  },
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#87E1DF',
      contrastText: '#023535',
    },
    secondary: {
      main: '#023535',
      contrastText: '#FFFFFF',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: 'none',
          ...typography.body1,
          ...(ownerState.variant === 'text' &&
            ownerState.color === 'primary' && {
              color: colors['green-3'],
            }),
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors['green-3'],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          fontSize: '1rem',
          fontWeight: '700',
          span: {
            padding: 0,
          },
        },
      },
    },
  },

  typography,
})

export default theme
