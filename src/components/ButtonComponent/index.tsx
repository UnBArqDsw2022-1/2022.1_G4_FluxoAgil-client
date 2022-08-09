/* eslint-disable react/require-default-props */
import { Button, Grid, ThemeProvider } from '@mui/material'
import React from 'react'

interface Props {
  icon?: any
  label: string
  onClick: () => void
  variant?: 'contained' | 'outlined' | 'text'
}

const defaultProps: Props = {
  icon: null,
  label: '',
  onClick: () => null,
  variant: 'contained',
}

export default function ButtonComponent(props: Props = defaultProps) {
  return (
    // <ThemeProvider theme={}>
    <Grid container>
      <Grid item xs={12}>
        <Button variant={props.variant} fullWidth onClick={props.onClick}>
          {props.icon !== null ? props.icon + props.label : props.label}
        </Button>
      </Grid>
    </Grid>
    // </ThemeProvider>
  )
}
