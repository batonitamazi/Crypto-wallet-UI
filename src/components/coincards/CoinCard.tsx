import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Grid, Stack } from '@mui/material';


function CoinCard() {
    return (
        <Box>
            <Typography variant="h4">Accounts</Typography>
            <Stack direction="row" spacing={2}>
                <Card sx={{ width: '10vw', height: 120, bgcolor: '#f73378' }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom color="#f0ebf7">
                            Binance
                        </Typography>
                        <Typography variant="h5" component="div" color="#f0ebf7">
                            .2355
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ width: '10vw', height: 120, bgcolor: '#26a69a' }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom color="#f0ebf7">
                            Bitcoin
                        </Typography>
                        <Typography variant="h5" component="div" color="#f0ebf7">
                            .2541
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ width: '10vw', height: 120, bgcolor: '#aa00ff' }}>
                    <CardContent>
                        <Box sx={{display: 'flex', justifyContent: 'start'}}>
                            <Avatar alt="Zcash" src="images/logos/zcashLogo.png" sx={{ width: '25px', height: '25px' }} />
                            <Typography variant="h6" gutterBottom color="#f0ebf7" sx={{pl: 3}}>
                                Zcash
                            </Typography>
                        </Box>
                        <Typography variant="h5" component="div" color="#f0ebf7">
                            .2355
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ width: '10vw', height: 120, bgcolor: '#ffd54f' }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom color="#f0ebf7">
                            Dash
                        </Typography>
                        <Typography variant="h5" component="div" color="#f0ebf7">
                            .2541
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    )
}

export default CoinCard