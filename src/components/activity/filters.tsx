import React from 'react'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import IosShareIcon from '@mui/icons-material/IosShare';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Filters() {
  return (
    <Box sx={{display: 'flex'}}>
        <TextField
          id="outlined-start-adornment"
          size="small"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SavedSearchIcon /></InputAdornment>,
          }}
        />
        <Box>
            <Button variant="text" size="small"><FilterAltIcon />Filter</Button>
            <Button variant="text" size="small"><IosShareIcon />Exports</Button>
        </Box>
    </Box>
  )
}

export default Filters