import React from 'react';
import { useSelector } from 'react-redux';


function SearchPage() {
  const searchState = useSelector((state: any) => state.search)
  console.log('searchState: ', searchState)

  return (
    <div>Search</div>
  );
}

export default SearchPage;
