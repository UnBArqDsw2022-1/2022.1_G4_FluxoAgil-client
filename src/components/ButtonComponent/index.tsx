/* eslint-disable react/require-default-props */
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@mui/material'
import React from 'react'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import theme from '../../utilities/theme'

interface Props {
  isUpload: boolean
  label: string
  onClick: (e: any) => void
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary'
}

const defaultProps: Props = {
  isUpload: false,
  label: '',
  onClick: () => null,
  variant: 'contained',
  color: 'secondary',
}

export default function ButtonComponent(props: Props = defaultProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <Button
            variant={props.variant}
            onClick={props.onClick}
            color={props.color}
            sx={{
              padding: '8px 16px',
            }}
          >
            {props.isUpload ? (
              <InsertDriveFileOutlinedIcon
                fontSize="small"
                sx={{ marginX: 1 }}
              />
            ) : (
              ''
            )}
            {props.label}
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
