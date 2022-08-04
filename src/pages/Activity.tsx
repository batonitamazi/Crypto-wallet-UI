import { Typography } from '@mui/material'
import React from 'react'
import Filters from '../components/activity/filters'

function Activity() {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Activity</Typography>
      <Filters />
    </>
  )
}

export default Activity