import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

export function Header() {
  return (
    <AppBar position="static">
      <Typography variant="h3" >F**king Medicine</Typography>
    </AppBar>
  );
}