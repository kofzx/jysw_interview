import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Area } from '@ant-design/plots';
import { Grid, Box, Skeleton } from '@mui/material';
import './index.scss'
import { fetchList } from '../../redux/actions/search';
import { useParams } from "react-router-dom"

const CHART_HEIGHT = 160

function SearchPage() {
  const { keywords } =  useParams()
  const dispatch = useDispatch()
  const searchState = useSelector((state: any) => state.search)
  const { list } = searchState

  const commonConfig = {
    height: CHART_HEIGHT,
    xField: 'date',
    yField: 'sv',
    xAxis: {
      range: [0, 1],
    },
  }

  useEffect(() => {
    if (keywords) {
      // 将路由参数的加号转回空格
      // ps: 请求了两次是因为 react18版本的特性，不管它
      dispatch(fetchList(keywords.replace(/\+/g, " ")) as any)
    }
  }, [dispatch, keywords])

  return (
    <div className='search-page'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} my={1}>
          {
            list && list.length > 0 ? list.map((item: any, index: number) => {
              const config = {
                ...commonConfig,
                data: item.search_msv
              }

              return (
                <Grid key={`chart-item-${index}`} item xs={3}>
                  <Area {...config} />    
                </Grid>
              )
            }) : (
              <div className='skeleton-wrapper'>
                {
                  new Array(4).fill(1).map((_, index) => {
                    return (
                      <div key={`skeleton-card-${index}`} className='skeleton-card'>
                        <Skeleton variant="rectangular" width={'100%'} height={CHART_HEIGHT} />
                        <Skeleton />
                        <Skeleton width="60%" />
                      </div>
                    )
                  })
                }
              </div>
            )
          }
        </Grid>
      </Box>   
    </div>
  );
}

export default SearchPage;
