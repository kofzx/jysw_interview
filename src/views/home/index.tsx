import { Typography } from '@mui/material';
import React from 'react';
import SearchBar from '../../biz-components/SearchBar';


function Home() {
  return (
    <>
      <Typography variant="h2" my={10}>
        Search Trends
      </Typography>
      <SearchBar />
    </>
  );
}

export default Home;
