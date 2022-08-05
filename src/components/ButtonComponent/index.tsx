/* eslint-disable react/require-default-props */
import { Button, Grid, ThemeProvider } from '@mui/material';
import React from 'react';

interface Props {
  hasIcon?: boolean;
  icon?: any;
  label: string;
  onClick: () => void;
  variant?: 'contained' | 'outlined' | 'text';
}

const defaultProps: Props = {
  hasIcon: false,
  icon: null,
  label: '',
  onClick: () => {},
  variant: 'contained',
};

export default function ButtonComponent(props: Props = defaultProps) {
  return (
    <ThemeProvider theme={}>
      <Grid container>
        <Grid item xs={12}>
          <Button variant={props.variant} fullWidth onClick={props.onClick}>
            {props.hasIcon ? props.icon + props.label : props.label}
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
