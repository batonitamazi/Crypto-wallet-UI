import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerInfo from './components/drawer/Drawer';
import Navbar from './components/navbar/Navbar';
import CoinCard from './components/coincards/CoinCard';
import BalanceInfo from './components/balance/BalanceInfo';
import Statistics from './components/statistics/Statistics';
import TransactionsCard from './components/recent transactions/TransactionsCard';
import MyWallets from './pages/MyWallets';
import Activity from './pages/Activity';








function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <DrawerInfo mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 6, pt: 8, width: { cm: 'calc(100% - 240px)' }, display: 'flex' }}
      >
        <Activity />
      </Box>
    </Box>
  );
}

export default App;
