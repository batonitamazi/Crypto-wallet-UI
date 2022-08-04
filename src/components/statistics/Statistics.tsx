import { Box, FormControl, InputLabel, Select, Typography } from '@mui/material'
import React from 'react'
import { Area, AreaChart,Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
        "name": "Jan",
        "dash": 10,
        "binance": 20,
        "litecoin": 24
    },
    {
        "name": "Feb",
        "dash": 40,
        "binance": 18,
        "litecoin": 25
    },
    {
        "name": "Mar",
        "dash": 35,
        "binance": 40,
        "litecoin": 52
    },
    {
        "name": "Apr",
        "dash": 30,
        "binance": 20,
        "litecoin": 24
    },
    {
        "name": "May",
        "dash": 32,
        "binance": 13,
        "litecoin": 28
    },
    {
        "name": "Jun",
        "dash": 23,
        "binance": 35,
        "litecoin": 20
    },
    {
        "name": "Jul",
        "dash": 13,
        "binance": 53,
        "litecoin": 22
    }
]

function Statistics() {
    return (
        <Box sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h4">Statistics</Typography>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Jan - Jul</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value=""
                            label="Jan - Jul"
                        >
                        </Select>
                    </FormControl>
                </div>
                <Box sx={{ mt: 3 }}>
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorBinance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f73378" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#f73378" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        {/* <CartesianGrid strokeDasharray="0 0" /> */}
                        <Tooltip />
                        <Area type="monotone" dataKey="dash" stroke="#ffd54f" fillOpacity={1} fill="url(#colorDash)" />
                        <Area type="monotone" dataKey="litecoin" stroke="#8884d8" fillOpacity={1} fill="url(#colorLitecoin)" />
                        <Area type="monotone" dataKey="binance" stroke="#f73378" fillOpacity={1} fill="url(#colorBinance)" />
                    </AreaChart>
                </Box>
            </Box>

        </Box>
    )
}

export default Statistics