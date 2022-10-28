import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" >
            News
          </Typography>
          <div style={{
            flex: 1
          }} ></div>
          <Link color="inherit" underline='none' href='/anuncio-nuevo'>CREAR ANUNCIO</Link>
        </Toolbar>
      </AppBar>
      <div style={{ paddingBottom: "1em" }} />
    </Box>
  );
}
