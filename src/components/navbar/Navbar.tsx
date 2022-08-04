import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';


interface NavbarProps {
  handleDrawerToggle: Function | any
}


function Navbar(props: NavbarProps) {
  const {handleDrawerToggle} = props;

  return (
    <AppBar
        position="fixed"
        sx={{
          width: { sm: 'calc(100% - 240px)' },
          ml: { sm: `240px` },
          backgroundColor: '#fff',
          boxShadow: 0

        }}
      >
        <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{color: '#9e9e9e'}}/>
          </IconButton>
          <SavedSearchIcon sx={{color: '#9e9e9e'}}/>
          <NotificationsNoneIcon  sx={{color: '#9e9e9e'}}/>
          <Avatar alt="Remy Sharp" src="/images/1.jpg" />
        </Toolbar>
      </AppBar>
  )
}

export default Navbar