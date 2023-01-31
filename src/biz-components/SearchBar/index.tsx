import React, { useState } from 'react'
import { Box, Grid, IconButton, OutlinedInput } from '@mui/material'
import { Search } from '@mui/icons-material';
import './index.scss'
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const [inputVal, setInputVal]= useState('')
  const searchValue = useSelector((state: any) => state.value)
  console.log('searchValue: ', searchValue)

  const handleChange = (e: any) => {
    setInputVal(e.target.value)
  }

  const handleSearch = () => {
    console.log('inputVal', inputVal)
    if (inputVal) {
      
    }
  }

  const handleKeyPress = (e: any) => {
    // 按下回车
    if (e.keyCode === 13) {
      handleSearch()
    }
  }

  return (
    <div className='search-bar'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs>
            <OutlinedInput fullWidth onChange={handleChange} onKeyDown={handleKeyPress} />
          </Grid>
          <Grid item xs={1} ml={1}>
            <IconButton
              sx={{
                width: '66px',
                border: '1px solid lightgrey',
                borderRadius: '6px'
              }}
              size='large'
              disableRipple
              onClick={handleSearch}
            >
              <Search />
            </IconButton>
            <div className='icon-button-box'>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default SearchBar