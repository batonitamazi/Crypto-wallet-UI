import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import TextsmsIcon from '@mui/icons-material/Textsms';
import PieChartIcon from '@mui/icons-material/PieChart';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ErrorIcon from '@mui/icons-material/Error';
import SettingsIcon from '@mui/icons-material/Settings';
import { Drawer } from '@mui/material';

interface Props {
  window?: () => Window;
  handleDrawerToggle: Function | any
  mobileOpen: boolean | any
}






function DrawerInfo(props: Props) {
  const { window, handleDrawerToggle, mobileOpen } = props
  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <div>
          <Box sx={{ paddingLeft: 5, marginTop: 2 }}>
            <Typography variant="h4" component='h3'>Company</Typography>
          </Box>
          <Toolbar />
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {list.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <List sx={{ paddingTop: 35 }}>
            {secondList.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
        open
      >
        <div>
          <Box sx={{ paddingLeft: 5, marginTop: 2 }}>
            <Typography variant="h4" component='h3'>Company</Typography>
          </Box>
          <Toolbar />
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {list.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <List sx={{ paddingTop: 35 }}>
            {secondList.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

      </Drawer>
    </>
  );
}


const secondList = [
  {
    name: 'get help',
    icon: <ErrorIcon />
  },
  {
    name: 'Settings',
    icon: <SettingsIcon />
  },
]
const list = [
  {
    name: 'Dashboard',
    icon: <HomeIcon />
  },
  {
    name: 'Invoices',
    icon: <ReceiptIcon />
  },
  {
    name: 'Messages',
    icon: <TextsmsIcon />
  },
  {
    name: 'My Wallet',
    icon: <AccountBalanceWalletIcon />
  },
  {
    name: 'Activity',
    icon: <PieChartIcon />
  },
  {
    name: 'Analytics',
    icon: <InsertChartIcon />
  },


]


export default DrawerInfo