import * as React from 'react';
import Box from '@mui/material/Box';
import CoinCard from '../components/coincards/CoinCard';
import TransactionsCard from '../components/recent transactions/TransactionsCard';
import BalanceInfo from '../components/balance/BalanceInfo';
import Statistics from '../components/statistics/Statistics';



function MyWallets() {
    return (
        <>
            <Box>
                <CoinCard />
                <BalanceInfo />
                <Statistics />
            </Box><Box sx={{ pt: '5vh', pl: '7vw' }}>
                <TransactionsCard />
            </Box>
        </>
    )
}

export default MyWallets