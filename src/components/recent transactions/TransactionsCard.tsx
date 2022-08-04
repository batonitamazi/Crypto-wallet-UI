import { Avatar, Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import TransactionCard from './TransactionCard'

function TransactionsCard() {
  return (
    <Box
      sx={{
        width: '30vw', height: '80vh',
        bgcolor: '#fafafa',
        borderRadius: '10px'
      }}>
      <Box sx={{
        pl: 2,
        width: '29vw', height: '78vh',
        display: 'flex', flexDirection: 'column',
        overflow: "hidden",
        overflowY: "scroll",
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" component="h4">Recent Transactions</Typography>
          <Button variant="text" color="error">See All</Button>
        </Box>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </Box>
    </Box>
  )
}

export default TransactionsCard