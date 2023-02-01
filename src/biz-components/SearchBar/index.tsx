import React, { useState } from 'react'
import { Box, Grid, IconButton, OutlinedInput } from '@mui/material'
import { Search } from '@mui/icons-material';
import './index.scss'
import { fetchList } from '../../redux/actions/search'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputVal, setInputVal]= useState('')

  const handleChange = (e: any) => {
    setInputVal(e.target.value)
  }

  const handleSearch = () => {
    if (inputVal) {
      dispatch(fetchList(inputVal) as any)
      // 将搜索参数的空格替换为 '+' 代入路由
      navigate(`/search/${inputVal.replace(/\s/g, "+")}`)
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