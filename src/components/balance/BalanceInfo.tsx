import React from 'react'
import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function BalanceInfo() {
    return (
        <Box>
            <Typography variant="h4">My Balance</Typography>
            <Card sx={{ width: '43vw', height: 140, bgcolor: '#2962ff', borderRadius: '13px' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', pt: 4 }}>
                    <Box
                        sx={{
                            width: '4vw', height: '8vh',
                            bgcolor: '#fff', borderRadius: '10px',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', 
                        }}>
                        <AccountBalanceWalletIcon
                            sx={{
                                color: '#2962ff', width: '5vw',
                                height: '5vh', mt: '1.5vh'
                            }} />
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant="inherit" sx={{color: '#e0e0e0'}}>Wallet balance</Typography>
                            <Typography variant="body1" sx={{color: '#fff'}}>$12,300</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant="inherit" sx={{color: '#e0e0e0'}}>Reward balance</Typography>
                            <Typography variant="body1" sx={{color: '#fff'}}>$1,300</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant="inherit" sx={{color: '#e0e0e0'}}>Total balance</Typography>
                            <Typography variant="body1" sx={{color: '#fff'}}>$13,500</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default BalanceInfo