import React, { useMemo } from 'react';
import { Grid, Typography, Box, Container, Divider } from '@mui/material';
import SearchBar from '../biz-components/SearchBar';
import { Outlet, useLocation } from 'react-router-dom';
import './index.scss'


function DefaultLayout() {
  const location = useLocation()
  const isInSearchRoute = useMemo(() => /search/.test(location.pathname), [location])

  return (
    <>
      <div className='header-mt'>
        <div className='header'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} my={1}>
              <Grid item xs={3} sx={{ cursor: 'pointer' }}>
                <Typography variant="h4" ml={4}>
                  <b>Best</b>Search
                </Typography>
              </Grid>
              <Grid item xs={9}>
                {
                  isInSearchRoute && <SearchBar />
                }
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </div>
      </div>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default DefaultLayout;
