import { Avatar, Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

function TransactionCard() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
                <Card sx={{ width: '3vw', height: '6vh', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '8px' }}>
                    <CardMedia sx={{ pt: 0.7 }} >
                        <Avatar src="images/1.jpg" />
                    </CardMedia>
                </Card>
                <Box sx={{ pl: 2, display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <Typography variant="h6" component="h6">Hugo Lester</Typography>
                    <Typography variant="body1">Paypal</Typography>
                </Box>
            </Box>
            <Box sx={{ pr: 1, display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                <Typography variant="h6" component="h6">-$4,54,41</Typography>
                <Typography variant="body1">USDT 4,12325,85</Typography>
            </Box>
        </Box>
    )
}

export default TransactionCard